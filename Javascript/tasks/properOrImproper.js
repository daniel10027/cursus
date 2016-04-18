function properOrImproper(A) {
  return Math.abs(A[0] / A[1]) < 1
    ? "Proper"
    : "Improper";
}