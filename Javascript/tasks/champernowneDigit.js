function champernowneDigit(n) {

    var s="";
    for(var i=0;i<1000;i++){
        s+=i+1;
    }
    console.log(s);
    return parseInt(s[n-1])
}
