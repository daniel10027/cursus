function digitSumsDifference(n) {
    var result = 0;
    while (n) {
        var digit = n % 10;
        if (digit % 2 === 1) {
            result -= digit;
        } else {
            result += digit;
        }
        n = Math.floor(n / 10);
    }
    return result;