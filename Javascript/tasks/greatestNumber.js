function greatestNumber(n, m, k) {
    var arr = ("" + n).split('');
    var min = Infinity;
    arr.map(v => Math.min(min, v));
    for (var i = 0; i < k; i++) {
        arr = arr.filter(function(val) {
            return parseInt(val) === min;
        });
    }
    return arr.join('');
}