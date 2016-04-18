function differentSubstringsTrie(inputString) {
    var substrings = [],
        result = 1;
    for (var i = 0; i < inputString.length; i++) {
        for (var j = i + 1; j <= inputString.length; j++) {
            substrings.push(inputString.substring(i, j));
        }
    }
    substrings.sort();
    for (var i = 1; i < substrings.length; i++) {
        if (substrings[i] !== substrings[i - 1]) {
            result++;
        }
    }
    return result;
}