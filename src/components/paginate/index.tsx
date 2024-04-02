import React, { ReactNode, useState } from "react";
import classNames from "classnames";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

interface IPaginationProps {
  total: number;
  limit: number;
  onPageChange?: (a: number) => void;
  defaultPage?: number;
}

// TODO:  moving forward use forward ref combined with a select input instead
function Paginate({ limit = 0, total = 0, defaultPage = 1, onPageChange }: IPaginationProps) {
  const [currentPage, setCurrentPage] = useState(defaultPage);

  const pageCount = Math.ceil(total / limit);

  if (total > 0 && limit > 0) {
    return (
      <div>
        <span className="sr-only">Pagination</span>
        <div className="flex items-center ">
          <Button
            variant={"ghost"}
            title="next"
            className="flex items-center gap-2">
            <ChevronLeft />
            <span>Next</span>
          </Button>

          <div className="mx-4 flex items-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => {
              return (
                <Button
                  variant={currentPage == i + 1 ? "outline" : "ghost"}
                  data-currentPage={currentPage == i + 1}
                  title="page"
                  key={i}
                  onClick={() => {
                    onPageChange ? onPageChange(i + 1) : null;
                    setCurrentPage(i + 1);
                  }}>
                  {i + 1}
                </Button>
              );
            })}
          </div>

          <Button
            variant={"ghost"}
            title="prev">
            <span>Previous</span>
            <ChevronRight />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <span>Pagination</span>
    </div>
  );
}

export default Paginate;
