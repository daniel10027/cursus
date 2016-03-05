function halvingSum(n) {

    var s=0;
    while(n>0){
        s+=n;
        n=Math.floor(n/2);
    }
    return s;
}
