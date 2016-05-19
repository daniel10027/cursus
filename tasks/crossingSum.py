def crossingSum(matrix, a, b):
  s = 0
  h, w = len(matrix), len(matrix[0])
  for i in range(0, w):
    s += matrix[a][i]
  for i in range(0, h):
    s += matrix[i][b]
  return s - matrix[a][b]
