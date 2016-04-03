function maximalAllowableSubarrays(inputArray, maxSum) {
    var right = [];
    var j = -1;
    var curSum = 0;
    for (var i = 0; i < inputArray.length; i++) {
        if (i > 0) {
            curSum -= inputArray[i - 1];
        }
        while (j + 1 < inputArray.length && curSum + inputArray[j + 1] <=
            maxSum) {
            curSum += inputArray[++j];
        }
        right.push(j);
    }
    return right;
}