/* 
{ task: "Implement a function that calculates the total bill amount with taxes and discounts applied, given the subtotal, tax rate, and discount percentage.", function: "calculateTotal" },
*/

import { IBillParams, calculateTotal } from "./calculateTotal";

describe("Total Bill", () => {
  it("returns subTotal given that the other two params are undefined", () => {
    const params = {
      subTotal: 100,
    } as IBillParams;

    const actual = calculateTotal(params);
    const expected = 100;

    expect(actual).toEqual(expected);
  });

  it("returns 0 given undefined params", () => {
    const params = {} as IBillParams;

    const actual = calculateTotal(params);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  it("returns a correct value given a taxRate of 0", () => {
    const params: IBillParams = {
      subTotal: 100,
      taxRate: 0 / 100,
      discountPercentage: 13.5 / 100,
    };

    const actual = calculateTotal(params);
    const expected = 86.5;

    expect(actual).toEqual(expected);
  });

  it("returns a correct value given a discount Percentage of 0", () => {
    const params: IBillParams = {
      subTotal: 100,
      taxRate: 13.5 / 100,
      discountPercentage: 0 / 100,
    };

    const actual = calculateTotal(params);
    const expected = 113.5;

    expect(actual).toEqual(expected);
  });

  it("returns 0 if the subTotal is 0", () => {
    const params: IBillParams = {
      subTotal: 0,
      taxRate: 13.5 / 100,
      discountPercentage: 5 / 100,
    };

    const actual = calculateTotal(params);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  it("returns the total Bill given the subtotal, tax rate and discount percentage", () => {
    const params: IBillParams = {
      subTotal: 100,
      taxRate: 13.5 / 100,
      discountPercentage: 5 / 100,
    };

    const actual = calculateTotal(params);
    const expected = 107.825;

    expect(actual).toEqual(expected);
  });
});
