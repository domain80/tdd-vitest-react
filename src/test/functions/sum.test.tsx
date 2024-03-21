import sum from "@/sum";

describe("sum", () => {
  it("it adds up two numbers", () => {
    const rs = sum(1, 2);
    expect(rs).toBe(1 + 2);
  });
});
