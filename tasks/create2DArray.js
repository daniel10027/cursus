function create2DArray(lengths) {
    var o = [];
    for (var i = 0; i < lengths.length; i++) {
        o[i] = [];
        for (var j = 0; j < lengths[i]; j++) {
            o[i][j] = j;
        }
    }
    return o;
}