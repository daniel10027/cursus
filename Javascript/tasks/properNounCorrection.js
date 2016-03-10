function properNounCorrection(noun) {
var first = noun[0].toUpperCase();
    var last = noun.substring(1).toLowerCase();
    return first+last;

}
