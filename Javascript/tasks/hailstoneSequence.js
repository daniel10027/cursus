function hailstoneSequence(n) {
    var c = 0
    while (n != 1) {
        if (n % 2) n = 3 * n + 1;
        else n /= 2;
        c++;
    }
    return c;
}