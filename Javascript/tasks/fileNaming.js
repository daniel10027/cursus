function fileNaming(names) {
    var newArr = [];
    for (var i = 0; i < names.length; i++) {
        var count = 0;
        var tmp = names[i];
        if (newArr.indexOf(names[i]) > -1) {
            while (newArr.indexOf(names[i]) > -1) {
                count++;
                names[i] = tmp + "(" + count + ")";
            }
        }
        newArr.push(names[i]);
    }
    return newArr;
}