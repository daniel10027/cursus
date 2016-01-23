function fileNaming(names) {
  var newArr = [];

  names.map(function(val) {
    if (newArr.indexOf(val)<0) {
      newArr.push(val);
    } else {
      var k = 1;
      var newVal = val + "(" + k + ")";
      while (newArr.indexOf(newVal)>0) {
        k++;
        newVal = val + "(" + k + ")";
      }
      newArr.push(newVal);

    }
  });
  return newArr;
}

console.log(fileNaming(["doc","doc","image","doc(1)","doc"]));
