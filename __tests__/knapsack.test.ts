import { knapsack } from "../__mocks__/knapsack";
import { KnapsackArg } from "../__interface__/KnapsackArg";
import { KnapsackTestCase as Testcase } from "../__testcases__/knapsackTestcase"; // テストケース

describe ('Test', () => {
  test('KnapsackTest', () => {
    Object.entries(Testcase).map((entry) => {
      const arg: KnapsackArg = entry[1]['arg'];
      const expected: number = entry[1]['expected']; // テスト出力期待値
      const result = knapsack(arg.count, arg.weights, arg.values, arg.capacity);
      expect(result).toBe(expected);
    })
  });
});