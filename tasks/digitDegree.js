function digitDegree(n) {

    var digitSum = function(n) {

        var sum = 0;
        while (n) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }

        return sum;
    };

    var result = 0;

    while (n >= 10) {
        result += 1;
        n = digitSum(n);
    }

    return result;
}
