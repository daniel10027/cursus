function fibonacciSimpleSum2(n) {
    var fib = [0, 1],
        cnt = 2;
    while (fib[cnt - 1] + fib[cnt - 2] < n) {
        fib.push(fib[cnt - 1] + fib[cnt - 2]);
        cnt++;
    }
    for (var i = 0; i < cnt; i++) {
        if (fib[i] + fib[cnt - 1] === n) { // cnt instead of n
            return true;
        }
    }
    return false;
}