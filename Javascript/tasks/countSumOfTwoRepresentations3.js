function countSumOfTwoRepresentations3(n, l, r) {
    var result = 0;
    for (var i = 1; i <= n - i; i++) {
        if (l <= i && n - i <= r) {
            result++;
        }
    }
    return result;
}