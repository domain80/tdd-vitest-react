export function letterCount(word: string) {
  const vowelCount = word?.match(/[aeiou]/gi)?.length;
  const consonantCount = word?.match(/[^aeiou\s]/gi)?.length;

  return {
    letterCount: word?.length ?? 0,
    vowelCount: vowelCount ?? 0,
    consonantCount: consonantCount ?? 0,
  };
}
