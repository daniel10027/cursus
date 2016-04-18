function differentSymbolsNaive(s) {
    var result = 0;
    for (var i = 1; i <= 26; i++) {
        var found = false;
        for (var j = 0; j < s.length; j++) {
            if (s[j].charCodeAt() === 'a'.charCodeAt() + i) {
                found = true;
                break;
            }
        }
        if (found) {
            result++;
        }
    }
    return result;
}