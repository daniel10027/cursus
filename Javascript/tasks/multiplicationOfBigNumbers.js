function multiplicationOfBigNumbers(base, a, b) {
    var c = [];
    var next = 0;
    for (var k = 0; k < a.length + b.length - 1; k++) {
        var cur = next;
        var i, j;
        if (k < a.length) {
            i = a.length - 1 - k;
            j = b.length - 1;
        } else {
            i = 0;
            j = a.length + b.length - 2 - k;
        }
        while (i < a.length && j >= 0) {
            cur += a[i] * b[j];
            i++;
            j--;
        }
        c.push(cur % base);
        next = Math.floor(cur / base);
    }
    if (next > 0) {
        c.push(next);
    }
    return c.reverse();
}