function missingNumber(arr) {
    var n = arr.length + 1,
        sum = 0,
        expectedSum = n * (n + 1) / 2;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return expectedSum - sum;
}