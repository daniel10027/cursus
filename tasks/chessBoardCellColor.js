function chessBoardCellColor(cell1, cell2) {

  var c1 = cell1.split("");
  var c2 = cell2.split("");

  return (c1[0].charCodeAt(0) - c2[0].charCodeAt(0) + c1[1].charCodeAt(0) - c2[1].charCodeAt(0)) % 2 == 0;
}
