function arrayMinimumAboveBound(inputArray, bound) {
    inputArray.sort((a, b) => a - b);
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] > bound) return inputArray[i];
    }
}
