import { getTransformedValue } from "../utils";

it("calculates the right transform", () => {
  const input = 5;
  const expected = 0;
  const computed = getTransformedValue(5, [5, 30], [0, 100]);
  expect(computed).toEqual(expected);
});
