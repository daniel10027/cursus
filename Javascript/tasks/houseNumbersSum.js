function houseNumbersSum(inputArray) {
    var s = 0;
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] !== 0) s += inputArray[i];
        else break;
    }
    return s;
}

function houseNumbersSum(inputArray) {
    var numberSum = 0,
        i = 0,
        x;
    do {
        x = inputArray[i++];
        numberSum += x;
    } while (x !== 0);
    return numberSum;
}