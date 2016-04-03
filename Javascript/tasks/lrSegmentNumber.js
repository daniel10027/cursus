function lrSegmentNumber(l, r) {
    var s = 0;
    for (var i = l; i <= r; i++) {
        s = s * 10 + i;
    }
    return s;
}

function lrSegmentNumber(l, r) {
    var s = "";
    for (var i = l; i <= r; i++) {
        s += i;
    }
    return parseInt(s);
}