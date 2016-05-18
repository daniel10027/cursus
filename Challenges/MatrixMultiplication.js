MatrixMultiplication = (A, B) => A.map(r => r.map((_, j) => r.reduce((s, v, i) => s + v * B[i][j], 0)))
