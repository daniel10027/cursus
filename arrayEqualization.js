function arrayEqualization(a, k) {

    var best = a.length;

    for (var i = 0; i < a.length; i++) {
        var x = a[i];
        var ans = 0;
        var cur = -1;
        for (var j = 0; j < a.length; j++) {
            if (cur === -1 && a[j] !== x) {
                cur = 0;
            }
            if (cur >= 0) {
                cur++;
            }
            if (cur === k || cur >= 0 && j === a.length - 1) {
                ans++;
                cur = -1;
            }
        }
        best = Math.min(best, ans);
    }

    return best;
}
