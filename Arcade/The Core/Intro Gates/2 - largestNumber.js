function largestNumber(n) {
    var s = "";
    for (var i = 0; i < n; i++) {
        s += 9;
    }
    return parseInt(s);
}


function largestNumber(n) {
    var s = 0;

    for (var i = 0; i < n; i++) {
        s *= 10;
        s += 9;

    }
    return n;
}


const largestNumber = n => Number("9".repeat(n));