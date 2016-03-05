function isPermutation(n, inputArray) {
    for(var i=0;i<n;i++){
        if(inputArray.indexOf(i+1)<0) return false;
    }
    return true;
}
