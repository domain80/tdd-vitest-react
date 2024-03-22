import { letterCount } from "./letterCount";

const NAMES = {
  single: "Nutifafa",
  double: "Nutifafa Afi",
  triple: "Samuel L Jackson",
};

describe("Count letters", () => {
  test("given a word it should return an object with property, letterCount", () => {
    const actual = letterCount(NAMES.double);
    const expected = 12;

    expect(actual.letterCount).toEqual(expected);
  });

  test("given a word it should return an object with property vowelCount", () => {
    const actual = letterCount(NAMES.double);
    const expected = 6;

    expect(actual.vowelCount).toEqual(expected);
  });

  test("given a word it should return an object with a consonantCount prop", () => {
    const actual = letterCount("another banger");
    const expected = 8;

    expect(actual.consonantCount).toEqual(expected);
  });

  test("given an undefined value it should return 0", () => {
    const actual = letterCount(undefined as unknown as string);
    const expected = {
      letterCount: 0,
      vowelCount: 0,
      consonantCount: 0,
    };

    expect(actual).toEqual(expected);
  });
});
