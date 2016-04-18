function encloseInBrackets(inputString) {
    return "(" + inputString + ")"
}
//BugFix
function encloseInBrackets(inputString) {
    inputString = '(' + inputString;
    inputString += '('; //')' instead of '('
    return inputString;
}