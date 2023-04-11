/**
 * @param n // 個数
 * @param weight // 重量のリスト
 * @param value // 価値のリスト
 * @param W // 重さの総和の上限
 * @returns 
 * 
 * ナップザック問題の解を返す
 */
export function knapsack(n: number, weight: number[], value: number[], W: number) {
  // DPテーブルの初期化
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(W + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= W; j++) {
      if (weight[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j - weight[i - 1]] + value[i - 1] )
      }
      // dp[i][j] = weight[i - 1] > j ? dp[i - 1][j]: Math.max(dp[i - 1][j - weight[i - 1]] + value[ i - 1 ]);
    }
  }
  return dp[n][W];
}