function fromDecimal(base, n) {
    var result = [];
    while (n) {
        result.push(n % base);
        n = Math.floor(n / base);
    }
    result.reverse();
    return result.join('');
}

function fromDecimal(base, n) {
    return parseInt(n, base);
}