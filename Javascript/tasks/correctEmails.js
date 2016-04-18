function correctEmails(pattern) {
    var count = function(s, c) {
        var result = 0;
        for (var i = 0; i < s.length; i++) {
            if (s.charAt(i) === c) {
                result++;
            }
        }
        return result;
    };
    var isSymbol = function(c) {
        return 'a' <= c && c <= 'e';
    };
    var isCorrectEmail = function(emailList) {
        email = emailList.join("");
        return count(email, '@') === 1 && count(email, '.') >= 1 && email.lastIndexOf(
                '.') > email.lastIndexOf('@') && email.indexOf("..") === -1 &&
            email.indexOf(".@") === -1 && email.indexOf("@.") === -1 &&
            isSymbol(email.charAt(0)) && isSymbol(email.charAt(email.length -
                1));
    };
    var countCorrectEmails = function(pattern, position) {
        if (position === pattern.length) {
            return isCorrectEmail(pattern) ? 1 : 0;
        }
        if (pattern[position] !== '?') {
            return countCorrectEmails(pattern, position + 1);
        }
        var answer = 0;
        pattern[position] = '@';
        answer += countCorrectEmails(pattern, position + 1);
        pattern[position] = '.';
        answer += countCorrectEmails(pattern, position + 1);
        pattern[position] = 'a';
        answer += countCorrectEmails(pattern, position + 1) * 5;
        pattern[position] = '?';
        return answer;
    };
    return countCorrectEmails(pattern.split(''), 0);
}