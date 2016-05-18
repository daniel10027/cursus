function divideAsLongAsPossible(n, d) {
    var count = 0;
    while (n % d === 0) {
        n /= d;
        count++;
    }
    return n;
}