function countInversionsNaive(inputArray) {
    var c = 0;
    for (var i = 0; i < inputArray.length; i++) {
        for (var j = i + 1; j < inputArray.length; j++) {
            if (inputArray[i] > inputArray[j]) c++;
        }
    }
    return c;
}