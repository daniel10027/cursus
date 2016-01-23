function sumDigits(n) {
    var s = ""+n;
    var arr = s.split('');
    var sum = 0;

    arr.map(function(val){
      sum+= parseInt(val);
    })

    return sum;
}

console.log(sumDigits(12545));
