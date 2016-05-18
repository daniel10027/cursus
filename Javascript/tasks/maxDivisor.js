function maxDivisor(left, right, divisor) {

    for (var i = right; i <= left; i--) {
        if (i % divisor === 0) {
            return i;
        }
    }
    return -1;
}
