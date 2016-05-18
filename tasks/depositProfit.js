function depositProfit(deposit, rate, threshold) {
    var fraction = [deposit, 1],
        year = 0;
    while (fraction[0] < fraction[1] * threshold) {
        fraction[0] *= 100 + rate;
        fraction[1] *= 100;
        year++;
    }
    return year;
}