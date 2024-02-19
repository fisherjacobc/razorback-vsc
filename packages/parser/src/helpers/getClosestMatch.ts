export function calculateLevenshteinDistance(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = [];

  for (let i = 0; i <= m; i++) {
    dp[i] = [];
    dp[i]![0] = i;
  }

  for (let j = 0; j <= n; j++) {
    dp[0]![j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i]![j] = Math.min(
        dp[i - 1]![j]! + 1,
        dp[i]![j - 1]! + 1,
        dp[i - 1]![j - 1]! + cost
      );
    }
  }

  return dp[m]![n]!;
}

export function getClosestMatch(
  input: string,
  validOptions: string[],
  maxDistance: number = 2
): string | null {
  let closestMatch: string | null = null;
  let minDistance = Infinity;

  validOptions.forEach((option) => {
    const distance = calculateLevenshteinDistance(input, option);
    if (distance < minDistance) {
      minDistance = distance;
      closestMatch = option;
    }
  });

  // Adjust the threshold as needed
  if (closestMatch !== null && minDistance <= maxDistance) return closestMatch;

  return null;
}
