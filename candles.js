function candles(A, B) {
    var left = 0;
    var count = 0;

    while (A > 0) {
        count += A;
        var tmp = A + left;
        A = Math.floor(tmp / B);
        left = tmp % B;

    }
    return count;

}


console.log(candles(5, 2));
