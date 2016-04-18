function largestSubset(a, bound) {
    var bruteForce = function(andValue, step, subsetSize) {
        if (step === a.length) {
            if (andValue >= bound) {
                return subsetSize;
            } else {
                return 0;
            }
        } else {
            var maxRes = bruteForce(andValue, step + 1, subsetSize),
                nextStepAndValue = a[step];
            if (andValue != -1) {
                nextStepAndValue &= andValue;
            }
            maxRes = Math.max(maxRes, bruteForce(nextStepAndValue, step + 1,
                subsetSize + 1));
            return maxRes;
        }
    };
    return bruteForce(-1, 0, 0);
}