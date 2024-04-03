import { render, screen } from "@testing-library/react";
import Paginate from ".";
import { userEvent } from "@testing-library/user-event";

describe("Pagination", () => {
  it("renders properly in the document", () => {
    render(
      <Paginate
        limit={0}
        total={0}
      />,
    );

    expect(screen.getByText(/pagination/i)).toBeInTheDocument();
    // expect(screen.getByText(/pagination/i)).not.toBeVisible()
  });

  it("renders the appropriate number of page selectors given a total and a page limit", () => {
    const total = 15;
    const limit = 5;
    render(
      <Paginate
        total={total}
        limit={limit}
      />,
    );

    expect(screen.getAllByTitle("page")).toHaveLength(3);
  });

  it("has a next button and a previous button", () => {
    const total = 15;
    const limit = 5;
    render(
      <Paginate
        total={total}
        limit={limit}
      />,
    );

    expect(screen.getByTitle(/next/i)).toBeInTheDocument();
    expect(screen.getByTitle(/prev/i)).toBeInTheDocument();
  });

  it("renders no button given that the limit zero", () => {
    const total = 15;
    const limit = 0;
    render(
      <Paginate
        total={total}
        limit={limit}
      />,
    );

    expect(screen.queryAllByTitle("page")).toHaveLength(0);
  });

  it("renders no button given that the total zero", () => {
    const total = 0;
    const limit = 10;
    render(
      <Paginate
        total={total}
        limit={limit}
      />,
    );

    expect(screen.queryAllByTitle("page")).toHaveLength(0);
  });

  it("renders page numbers in each button", () => {
    const expected = ["1", "2", "3", "4"];

    const total = 20;
    const limit = 5;
    render(
      <Paginate
        total={total}
        limit={limit}
      />,
    );

    const buttons = screen.getAllByTitle("page");
    buttons.forEach((btn, i) => {
      expect(btn.textContent).toContain(expected[i]);
    });
  });

  it("calls the pageChangeHandeler given to it when any of its buttons are clicked ", async () => {
    const user = userEvent.setup();

    const total = 20;
    const limit = 5;
    const callback = vi.fn();
    render(
      <Paginate
        total={total}
        limit={limit}
        onPageChange={callback}
      />,
    );

    const buttons = screen.getAllByTitle("page");
    await user.click(buttons[0]);
    await user.click(buttons[1]);
    await user.click(buttons[2]);
    await user.click(buttons[3]);
    expect(callback).toHaveBeenCalledTimes(4);
  });

  it("calls the pageChangeHandler given with the value of the current page upon a user click", async () => {
    const user = userEvent.setup();

    const total = 20;
    const limit = 5;
    const callback = vi.fn();
    render(
      <Paginate
        total={total}
        limit={limit}
        onPageChange={callback}
      />,
    );

    const buttons = screen.getAllByTitle("page");
    await user.click(buttons[0]);
    expect(callback).toBeCalledWith(1);
    await user.click(buttons[1]);
    expect(callback).toBeCalledWith(2);
    await user.click(buttons[2]);
    expect(callback).toBeCalledWith(3);
  });

  it("sets the data-currentPage of the first button to true by default", () => {
    const total = 20;
    const limit = 5;
    const callback = vi.fn();
    render(
      <Paginate
        total={total}
        limit={limit}
        onPageChange={callback}
      />,
    );

    const firstBtn = screen.queryByText(/1/i);
    expect(firstBtn).toHaveAttribute("data-currentPage", "true");
  });

  it("sets data-currentPage attribute to true when a button is pressed", async () => {
    const user = userEvent.setup();

    const total = 20;
    const limit = 5;
    const callback = vi.fn();
    render(
      <Paginate
        total={total}
        limit={limit}
        onPageChange={callback}
      />,
    );

    const btn = screen.getByText(/3/i);
    await user.click(btn);
    expect(btn).toHaveAttribute("data-currentPage", "true");
  });

  it("renders only 3 page selectors at a time", () => {
    const total = 28;
    const limit = 5;
    const callback = vi.fn();
    render(
      <Paginate
        total={total}
        limit={limit}
        onPageChange={callback}
      />,
    );

    const btns = screen.getAllByTitle("page");
    expect(btns).toHaveLength(3);
  });

  it("renders only 3 page selectors at a time given the current page is the last one", () => {
    const total = 28;
    const limit = 5;
    const callback = vi.fn();
    render(
      <Paginate
        total={total}
        limit={limit}
        onPageChange={callback}
        defaultPage={6}
      />,
    );

    const btns = screen.getAllByTitle("page");
    expect(btns).toHaveLength(3);
  });
  it("renders only 3 page selectors at a time given the current page is not the first one", () => {
    const total = 28;
    const limit = 5;
    const callback = vi.fn();
    render(
      <Paginate
        total={total}
        limit={limit}
        onPageChange={callback}
        defaultPage={3}
      />,
    );

    const btns = screen.getAllByTitle("page");
    expect(btns).toHaveLength(3);
  });

  it("goes to the next page when the next button is clicked", async () => {
    const user = userEvent.setup();

    const total = 28;
    const limit = 5;
    const callback = vi.fn();
    render(
      <Paginate
        total={total}
        limit={limit}
        onPageChange={callback}
        defaultPage={2}
      />,
    );

    const next = screen.getByTitle("next");
    await user.click(next);
    expect(screen.getByText(3)).toHaveAttribute("data-currentPage", "true");
  });

  it("goes to the previous page when the next button is clicked", async () => {
    const user = userEvent.setup();

    const total = 28;
    const limit = 5;
    const callback = vi.fn();
    render(
      <Paginate
        total={total}
        limit={limit}
        onPageChange={callback}
        defaultPage={2}
      />,
    );

    const next = screen.getByTitle(/prev/i);
    await user.click(next);
    expect(screen.getByText(1)).toHaveAttribute("data-currentPage", "true");
  });

  it("calls the pageChangeHandler when the next button is clicked", async () => {
    const user = userEvent.setup();

    const total = 28;
    const limit = 5;
    const callback = vi.fn();
    render(
      <Paginate
        total={total}
        limit={limit}
        onPageChange={callback}
        defaultPage={2}
      />,
    );

    const next = screen.getByTitle("next");
    await user.click(next);
    expect(callback).toHaveBeenCalledWith(3);
  });

  it("calls the pageChangeHandler when the prev button is clicked", async () => {
    const user = userEvent.setup();

    const total = 28;
    const limit = 5;
    const callback = vi.fn();
    render(
      <Paginate
        total={total}
        limit={limit}
        onPageChange={callback}
        defaultPage={2}
      />,
    );

    const prev = screen.getByTitle(/prev/i);
    await user.click(prev);
    expect(callback).toHaveBeenCalledWith(1);
  });
});
