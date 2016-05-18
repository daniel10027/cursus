function isCorrectSentence(inputString) {
    return /[A-Z]/.test(inputString[0]) && inputString[inputString.length - 1] ===
        "."
}
//More readable form
function isCorrectSentence(inputString) {
    var first = inputString[0];
    var last = inputString[inputString.length - 1];
    return /[A-Z]/.test(first) && last == "."
}