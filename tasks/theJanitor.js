function theJanitor(word) {

    var arr=[];
    var newArr=[];

    for(var i=0;i<word.length;i++){
        if(newArr.indexOf(word[i])===-1){
            newArr.push(word[i]);
        }
    }

    for(var i=0;i<26;i++){
        arr[i] = 0;
    }

    for(var i=0;i<newArr.length;i++){
        var tmp = newArr[i].charCodeAt() - "a".charCodeAt();
        arr[tmp] = word.lastIndexOf(newArr[i]) - word.indexOf(newArr[i])+1;
    }

    return arr;

}
