function sumDigits(n) {
    var arr = (""+n).split('');
    var sum = 0;

    arr.map(function(val){
      sum+= parseInt(val);
    })

    return sum;
}

console.log(sumDigits(12545));
