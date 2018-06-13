function tennisSet(score1, score2) {
  if (score1 == 6 && score2 < 5) {
      return true;
  }
  if (score1 < 5 && score2 == 6 ) {
      return true;
  }
  if (
      (score1 == 7 && (score2 >= 5 && score2 < 7)) ||
      ((score1 >= 5 && score1 <7) && score2 == 7)
  ) {
      return true;
  }
  return false;
}
  
