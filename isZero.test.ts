import { isZero } from "./isZero";

test("Argument is zero", () => {
  const result = isZero(0);
  expect(result).toBe(true);
});