function myConcat(arguments, separator) {
    var result = "";
    for (var i = 0; i < arguments.length; i++) {
        result = result + arguments[i] + separator;
    }
    return result;
}

function myConcat(arguments, separator) {
    return arguments.join(separator) + separator;
}