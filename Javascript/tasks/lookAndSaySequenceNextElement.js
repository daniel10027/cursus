function lookAndSaySequenceNextElement(inputString) {
    var consecutiveEqual = 1,
        result = [];
    inputString += '#';
    for (var i = 1; i < inputString.length; i++) {
        if (inputString[i] !== inputString[i - 1]) {
            result.push(consecutiveEqual);
            result.push(inputString[i - 1]);
            consecutiveEqual = 1;
        } else {
            consecutiveEqual++;
        }
    }
    return result.join('');
}