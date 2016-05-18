function howManyLines(X, Y) {
    var result = [];
    for (var i = 1; i < X.length; i++) {
        result.push(0);
    }
    for (var i = 0; i < X.length; i++) {
        for (var j = i + 1; j < X.length; j++) {
            var A = Y[i] - Y[j],
                B = X[j] - X[i],
                C = -A * X[i] - B * Y[i],
                countPoints = 0;
            for (var k = 0; k < X.length; k++) {
                if (A * X[k] + B * Y[k] + C === 0) {
                    countPoints++;
                }
            }
            result[countPoints - 2]++;
        }
    }
    for (var i = 0; i < X.length - 1; i++) {
        result[i] /= (i + 1) * (i + 2) / 2;
    }
    return result;
}