function bishopAndPawn(cell1, cell2) {
    var getX = function(pos) {
        return pos.charCodeAt() - 'A'.charCodeAt();
    }
    var getY = function(pos) {
        return pos.charCodeAt() - '1'.charCodeAt();
    }
    var x1 = getX(cell1[0]),
        y1 = getY(cell1[1]),
        x2 = getX(cell2[0]),
        y2 = getY(cell2[1]);
    if (x1 + y1 === x2 + y2 || x1 - y1 === x2 - y2) {
        return true;
    }
    return false;
}