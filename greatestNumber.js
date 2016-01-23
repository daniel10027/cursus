function greatestNumber(n, m, k) {
  var s = "" + n;
  var arr = s.split('');
  var min = minimum(arr);
  console.log(min);

  for (var i = 0; i < k; i++) {

    arr = arr.filter(function(val){
      return parseInt(val) === min;
    });
  }

  return arr.join('');
}

function minimum(arr) {
  var min = parseInt(arr[0]);

  for (var i = 1; i < arr.length; i++) {
    if (parseInt(arr[i]) <= min) min = parseInt(arr[i]);
  }

  return min;

}

// console.log(minimum([]))
console.log(greatestNumber(97730, 3, 5));
// console.log(greatestNumber(7940, 1, 4));
