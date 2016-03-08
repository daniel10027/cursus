function arrayChange(inputArray) {
var c=0;
    for(var i=0;i<inputArray.length-1;i++){
        while(inputArray[i+1]<=inputArray[i]){
            inputArray[i+1]++;
            c++;
        }
    }

    return c;
}
