function findPath(matrix) {

    var positionX = -1,
        positionY = -1;

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 1) {
                positionX = i;
                positionY = j;
            }
        }
    }
    for (var i = 1; i < matrix.length * matrix[0].length; i++) {
        var found = false;
        var nextX = -1;
        var nextY = -1;
        for (var dx = -1; dx <= 1; dx++) {
            for (var dy = -1; dy <= 1; dy++) {
                if (dx * dy === 0) {
                    if (positionX + dx >= 0 && positionX + dx < matrix.length && positionY + dy >= 0 && positionY + dy < matrix[0].length) {
                        if (matrix[positionX + dx][positionY + dy] === i + 1) {
                            found = true;
                            nextX = positionX + dx;
                            nextY = positionY + dy;
                        }
                    }
                }
            }
        }
        if (found) {
            positionX = nextX;
            positionY = nextY;
        } else {
            return false;
        }
    }
    return true;
}
