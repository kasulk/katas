export function sortTheInnerContent(words: string): string {
  return words
    .split(" ")
    .map((word) => {
      if (word.length <= 2) return word;
      const first = word[0];
      const last = word.slice(-1);
      const middle = word.slice(1, -1);

      return (
        first +
        middle
          .split("")
          .sort((a, b) => {
            if (a > b) return -1;
            if (a < b) return 1;
            return 0;
          })
          .join("") +
        last
      );
    })
    .join(" ");
}
