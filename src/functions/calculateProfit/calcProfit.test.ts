/* 
 { task: "Create a function that calculates the profit from a sale, given the cost price, selling price, and quantity sold.", function: "calculateProfit" }
*/
import { IProfitParam, calculateProfit } from "./calcProfit";

describe("Calculate profit", () => {
  test("given a cost price, selling price and quantity sold, it should return the profit made from the sale", () => {
    const params = {
      unitCostPrice: 10,
      unitSellingPrice: 12,
      quantitySold: 4,
    };

    const actual = calculateProfit(params);
    const expected = 8;

    expect(actual).toEqual(expected);
  });

  test("given an undefined params, it should return 0", () => {
    const params = {} as IProfitParam;

    const actual = calculateProfit(params);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test("given a selling price equal to the cost price, it should return a profit of 0", () => {
    const params = {
      unitCostPrice: 10,
      unitSellingPrice: 10,
      quantitySold: 3,
    };

    const actual = calculateProfit(params);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test("given a quantity sold of 0, it should return a profit of 0", () => {
    const params = {
      unitCostPrice: 10,
      unitSellingPrice: 12,
      quantitySold: 0,
    };

    const actual = calculateProfit(params);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test("given a selling price of 0, and a positive cost price it should return the loss (negative profit) made from the sale", () => {
    const params = {
      unitCostPrice: 10,
      unitSellingPrice: 0,
      quantitySold: 4,
    };

    const actual = calculateProfit(params);
    const expected = -40;

    expect(actual).toEqual(expected);
  });

  test("given a cost price of 0, it should return the profit made from the sale", () => {
    const params = {
      unitCostPrice: 0,
      unitSellingPrice: 12,
      quantitySold: 4,
    };

    const actual = calculateProfit(params);
    const expected = 48;

    expect(actual).toEqual(expected);
  });
});
