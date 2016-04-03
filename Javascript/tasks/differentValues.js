function differentValues(A, D) {
    var max = -1;
    for (var i = 0; i < A.length; i++) {
        for (var j = i + 1; j < A.length; j++) {
            var tmp = Math.abs(A[i] - A[j]);
            if (tmp <= D) {
                max = Math.max(max, tmp);
            }
        }
    }
    return max
}