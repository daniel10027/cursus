function squareDigitsSequence(n) {
var result =2;
    while(n!==sumDigits(n)){
      console.log(sumDigits(n));
        n = sumDigits(n);
        result++;
    }

    return result;
}

function sumDigits(n){
    var s = ""+n;
    // console.log(s);
    var sum =0;
    var arr = s.split('');
    // console.log(arr);
    arr.map(function(val){
        sum+=parseInt(val)*parseInt(val);
    });

    return sum;
}

// console.log(sumDigits(10000001));
console.log(squareDigitsSequence(103));
