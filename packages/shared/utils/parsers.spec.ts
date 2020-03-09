import { stringifyNumber } from "./parsers";

describe("parsers", () => {
  describe("stringifyNumber", () => {
    it("should return the number value as a string", () => {
      const parsed = stringifyNumber(33);

      expect(parsed).toBe("33");
    });
  });
});
