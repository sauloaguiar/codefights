function climbingStairs(n) {
    
  const memo = [];
  f = (n) => {
      if (n < 0) return 0;
      if (n == 0) return 1;
      if (memo[n-1]) return memo[n-1];
      let val = f(n-1)+f(n-2);
      memo.push(val);
      return memo[n-1];
  }
  
  return f(n);
}