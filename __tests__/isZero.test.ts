import { isZero } from "../__mocks__/isZero";

test("Argument is zero", () => {
  const result = isZero(0);
  expect(result).toBe(true);
});