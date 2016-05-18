theTree = N => {
  r = []
  for (i = 0; i < N; i++) {
    r[i] = ""
    for (j = 0; j < N - i - 1; j++)
      r[i] += " "
    for (k = 0; k < 2 * i + 1; k++)
      r[i] += "*"
    for (j = 0; j < N - i - 1; j++)
      r[i] += " "
  }
  return r
}
