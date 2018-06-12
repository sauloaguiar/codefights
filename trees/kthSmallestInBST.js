function kthSmallestInBST(t, k) {
  let value = 0;
  inOrder = (t, k, counter) => {
      if (t == null) return counter;
      counter = inOrder(t.left, k, counter);
      counter++;
      if (counter == k) {
          value = t.value;
          return counter;
      }
      counter = inOrder(t.right, k, counter);
      return counter;
  }
  inOrder(t, k, 0);
  return value;
}