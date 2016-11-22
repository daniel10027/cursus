function tennisSet(score1, score2) {
  if (score1 < score2) {
    var tmp = score1;
    score1 = score2;
    score2 = tmp;
  }
  if (score1 === 6 && score2 < 5 || (score1 === 7 && score2 <= 6 && score2 >= 5)) {
    return true;
  }
  return false;
}
