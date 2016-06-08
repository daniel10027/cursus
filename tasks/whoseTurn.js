function whoseTurn(p) {

  var color = function(r, c) {
    return(r + c) % 2;
  }

  var s = 0;
  for(var i = 0; i < 4; i++) {
    var c = p.charCodeAt(i * 3 + 0) - 'a'.charCodeAt();
    var r = p.charCodeAt(i * 3 + 1) - '0'.charCodeAt();
    s += color(r, c);
  }

  return s % 2 === 0;
}
