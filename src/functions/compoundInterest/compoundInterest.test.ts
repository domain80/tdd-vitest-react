/* 
{ task: "Write a function that calculates the compound interest given the principal amount, interest rate, compounding frequency, and time period.", function: "compoundInterest" },
*/

import { IInterestParams, getCompoundInterest } from "./compoundInterest";

describe("compound Interest Calculator", () => {
  test("given the principal, rate, compounding frequency and time it should return an object with amountprop", () => {
    const params = {
      principal: 5000,
      ratePerAnnum: 8.5 / 100,
      compoundingFreq: 12,
      time: 2,
    };

    const actual = getCompoundInterest(params);
    const expected = 5922.97;
    expect(actual.amount).toEqual(expected);
  });

  test("given the principal, rate, compounding frequency and time it should return an object with an interest prop", () => {
    const params = {
      principal: 5000,
      ratePerAnnum: 8.5 / 100,
      compoundingFreq: 12,
      time: 2,
    };

    const actual = getCompoundInterest(params);
    const expected = 922.97;
    expect(actual.interest).toEqual(expected);
  });

  test("given undefined, the function should return an amount prop of 0 and an interest of 0", () => {
    const params = undefined as unknown as IInterestParams;

    const actual = getCompoundInterest(params);
    const expected = {
      amount: 0,
      interest: 0,
    };

    expect(actual).toEqual(expected);
  });

  test("given compoundingFreq of 0, it should return the principal and interest of 0", () => {
    const params = {
      principal: 5000,
      ratePerAnnum: 8.5 / 100,
      compoundingFreq: 0,
      time: 2,
    };

    const actual = getCompoundInterest(params);
    const expected = {
      amount: 5000,
      interest: 0,
    };

    expect(actual).toEqual(expected);
  });

  test("given time of 0, it should return principal and an interest of 0  ", () => {
    const params = {
      principal: 5000,
      ratePerAnnum: 8.5 / 100,
      compoundingFreq: 12,
      time: 0,
    };

    const actual = getCompoundInterest(params);
    const expected = {
      amount: 5000,
      interest: 0,
    };
    expect(actual).toEqual(expected);
  });

  test("given a principal of 0, it should return amount of 0 and interest of 0", () => {
    const params = {
      principal: 0,
      ratePerAnnum: 8.5 / 100,
      compoundingFreq: 12,
      time: 2,
    };

    const actual = getCompoundInterest(params);
    const expected = {
      amount: 0,
      interest: 0,
    };
    expect(actual).toEqual(expected);
  });
});
