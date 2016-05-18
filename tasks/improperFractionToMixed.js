function improperFractionToMixed(A) {
    return [Math.floor(A[0] / A[1]), A[0] % A[1], A[1]];
}