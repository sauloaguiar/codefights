function willYou(young, beautiful, loved) {
  // false true false
  if (young && beautiful) {
      return !loved;
  }
  if (loved && young) {
      return !beautiful;
  }
  if (!young && !beautiful) {
      return loved;
  }
  if (!young && !loved) {
      return beautiful;
  }
  
  return false;
}
