function sameDigitNumber(n) {

  var s = ""+n;
    var arr = s.split('');
    console.log(arr);
  var result = s[0];
  console.log(result);

  arr=arr.filter(function(val) {
    return val !== result;
  });

console.log(s);
console.log(arr);
  return (arr.length===0);

}

console.log(sameDigitNumber(1211));
