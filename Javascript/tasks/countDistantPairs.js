function countDistantPairs(inputString, distance) {
    var c = 0;
    for (var i = 0; i < inputString.length - distance; i++) {
        if (inputString[i] === inputString[i + distance + 1]) c++;
    }
    return c;
}