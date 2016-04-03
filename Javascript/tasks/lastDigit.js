function lastDigit(a, b) {
    var ans = 1;
    for (var i = 0; i < b; i++) {
        ans *= a;
        ans %= 10;
    }
    return ans;
}