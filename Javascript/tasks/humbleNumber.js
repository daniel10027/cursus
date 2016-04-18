function humbleNumber(n) {
    var lastUsed = [0, 0, 0, 0];
    var ans = [1];
    var primes = [2, 3, 5, 7];
    var next = [0, 0, 0, 0];
    while (n > 1) {
        for (var i = 0; i < 4; i++) {
            next[i] = ans[lastUsed[i]] * primes[i];
        }
        var minNext = Math.min(Math.min(next[0], next[1]), Math.min(next[2],
            next[3]));
        ans.push(minNext);
        for (var i = 0; i < 4; i++) {
            if (next[i] === minNext) {
                lastUsed[i]++;
            }
        }
        n--;
    }
    return ans[ans.length - 1];
}