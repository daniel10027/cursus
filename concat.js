function myConcat(arguments,separator) {
var result = "";

    for(var i=0;i<arguments.length;i++){
        result = result+arguments[i]+separator;
    }

        return result;
}


console.log(myConcat(["je","ne","sais","pas"]," "));
