function maxFraction(numerators, denominators) {
    var element = 0;
    var max = numerators[0] / denominators[0];
    for (var i = 1; i < numerators.length; i++) {
        var fraction = numerators[i] / denominators[i];
        if (fraction > max) {
            max = fraction;
            element = i;
        }
    }
    return element;
}