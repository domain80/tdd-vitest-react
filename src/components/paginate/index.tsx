import { useState } from "react";
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

  function pageChange(val: number) {
    const nextPage =
      currentPage + val > pageCount ? currentPage : currentPage + val < 1 ? currentPage : currentPage + val;
    setCurrentPage(nextPage);
    onPageChange ? onPageChange(nextPage) : null;
  }

  if (total > 0 && limit > 0) {
    return (
      <div>
        <span className="sr-only">Pagination</span>
        <div className="flex items-center ">
          <Button
            variant={"ghost"}
            onClick={() => pageChange(-1)}
            title="prev">
            <ChevronLeft />
            <span>Previous</span>
          </Button>

          <div className="mx-4 flex items-center gap-2">
            {Array.from({ length: pageCount }, (_, i) => {
              if (
                (currentPage == 1 && i + 1 < currentPage + 3) ||
                (currentPage > 1 && currentPage == i + 1) ||
                i + 1 == currentPage - 1 ||
                i + 1 == currentPage + 1 ||
                (currentPage == pageCount && i + 1 == pageCount - 2)
              )
                return (
                  <Button
                    variant={currentPage == i + 1 ? "outline" : "ghost"}
                    data-currentPage={currentPage == i + 1}
                    title="page"
                    key={i}
                    onClick={() => pageChange(i + 1 - currentPage)}>
                    {i + 1}
                  </Button>
                );
            })}
          </div>
          <Button
            variant={"ghost"}
            title="next"
            onClick={() => pageChange(+1)}
            className="flex items-center gap-2">
            <span>Next</span>
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
