function isSum(value) {
    var M = Math.sqrt(2 * value + 0.25) - 0.5;
    return Math.floor(M) === M;
}

function isSum2(n){
    var i=1;
    while(n){
        n-=i++;
    }
    return n===0;
}
