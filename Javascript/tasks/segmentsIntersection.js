function segmentsIntersection(left, right) {
    var max = left[0];
    var min = right[0];


    for (var i = 1; i < left.length; i++) {
        max = Math.max(max, left[i]);
        min = Math.min(min, right[i]);
    }

    return Math.max(0, min - max);
}
