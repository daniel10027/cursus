function pawnRace(white, black, toMove) {
    var wHor = white.charCodeAt(1) - '0'.charCodeAt(0);
    var wVert = white.charCodeAt(0) - 'a'.charCodeAt(0);
    var bHor = black.charCodeAt(1) - '0'.charCodeAt(0);
    var bVert = black.charCodeAt(0) - 'a'.charCodeAt(0);
    if (wVert === bVert && wHor < bHor) {
        return "draw";
    }
    if (Math.abs(wVert - bVert) !== 1 || wHor >= bHor) {
        var wRest = Math.min(8 - wHor, 5);
        var bRest = Math.min(bHor - 1, 5);
        if ((wRest <= bRest && toMove != 'b') || (wRest < bRest && toMove !=
                'w')) {
            return "white";
        }
        return "black";
    }
    var winningPairs = [
        [2, 5],
        [2, 6],
        [3, 6],
        [4, 7]
    ];
    if (toMove === 'w') {
        for (var i = 0; i < 4; i++) {
            if (wHor === winningPairs[i][0] && bHor === winningPairs[i][1]) {
                return "white";
            }
        }
        if (wHor + 1 === bHor) {
            return "white";
        }
        return "black";
    } else {
        for (var i = 0; i < 4; i++) {
            if (wHor === 9 - winningPairs[i][1] && bHor === 9 - winningPairs[i]
                [0]) {
                return "black";
            }
        }
        if (wHor + 1 === bHor) {
            return "black";
        }
        return "white";
    }
}