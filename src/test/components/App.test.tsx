import { render, screen } from "@testing-library/react";
import App from "@/App";

describe("App", () => {
  it("should be present", () => {
    render(<App />);
    const v = screen.queryAllByText(/Vite/i);

    expect(v.length).toBeGreaterThanOrEqual(1);
  });
});
