function isDiagonalMatrix(matrix) {

    for(var i=0;i<matrix.length;i++){
        for(var j=0;j<matrix.length;j++){
            if(i!==j && matrix[i][j]!==0) return false;
        }
    }
    return true;
}
