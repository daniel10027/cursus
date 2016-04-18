function extractEachKth(inputArray, k) {
    var k = inputArray.filter((v, i) => ((i + 1) % k) !== 0);
    return k;
}