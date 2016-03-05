function arrayMaximalDifference(inputArray) {

    var max =0;

    for(var i=0;i<inputArray.length;i++){
        for(var k=0;k!=i && k<inputArray.length;k++){
            var diff = Math.abs(inputArray[i]-inputArray[k]);
            max = Math.max(max, diff);
        }
    }
    return max;
}
