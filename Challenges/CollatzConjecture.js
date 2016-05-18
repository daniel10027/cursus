function CollatzConjecture(n) {
    var s = "";

    while (n != 1) {
        s += n + " ";
        if (n % 2) n = 3 * n + 1;
        else n = n / 2;
    }

    return s.trim();
}
