function fractionReducing(fraction) {

    var gcd = function(a, b) {
        if (a > b) {
            return gcd(b, a);
        }
        if (!a) {
            return b;
        }
        return gcd(b % a, a);
    };

    var commonDivisor = gcd(fraction[0], fraction[1]);
    fraction[0] /= commonDivisor;
    fraction[1] /= commonDivisor;

    return fraction;
}
