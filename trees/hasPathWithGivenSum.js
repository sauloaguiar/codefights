function hasPathWithGivenSum(t, s) {
  if (t == null) {
      return (s == 0)
  }
  let answer = false;
  if (t.left == null && t.right == null && t.value == s) {
      return true;
  }
  if (t.left != null) {
      answer = answer || hasPathWithGivenSum(t.left, s - t.value);
  }
  if (t.right != null) {
      answer = answer || hasPathWithGivenSum(t.right, s - t.value);
  }
  return answer;
}