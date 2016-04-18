function quotientKthDigitAfterDecimalPoint(a, b, k) {

    a %= b;
    while (k > 1) {
        a = Math.floor((a * 10) % b);
        k--;
    }

    return Math.floor((a * 10) / b);
}
