function isOneSwapEnough(inputString) {

  var badPairs = [
    [],
    []
  ];
  var badPairsCnt = 0;
  for(var i = 0; i < Math.floor(inputString.length / 2); i++) {
    var a = inputString[i];
    var b = inputString[inputString.length - i - 1];
    if(a !== b) {
      if(badPairsCnt === 2) {
        return false;
      }
      if(a > b) {
        var t = a;
        a = b;
        b = t;
      }
      badPairs[badPairsCnt++] = [a, b];
    }
  }
  if(badPairsCnt === 0) {
    return true;
  } else if(badPairsCnt === 1) {
    if(inputString.length % 2 === 0) {
      return false;
    }
    var c = inputString[Math.floor(inputString.length / 2)];
    return badPairs[0][0] === c || badPairs[0][1] === c;
  } else {
    return badPairs[0][0] === badPairs[1][0] && badPairs[0][1] === badPairs[1][
      1
    ];
  }
}
1
];
}
}
