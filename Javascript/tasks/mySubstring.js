function mySubstring(inputString, l, r) {
    return inputString.substr(l, r - l + 1);
    // Alternative
    // return inputString.substring(l,r+1);
}