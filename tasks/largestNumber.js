function largestNumber(n) {
    var s = "";
    for (var i = 0; i < n; i++) {
        s += 9;
    }
    return parseInt(s);
}

function largestNumber(n) {
    return Math.pow(10, n) - 1;
}


function largestNumber(n) {
    return parseInt('9'.repeat(n));
}