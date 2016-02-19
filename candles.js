function candles(A, B) {
    var left = 0;
    var count = A;

    while (A > 1) {
        console.log("(" + A + "," + left + ")");
        count += A;
        A = Math.floor((A + left) / B);
        left = ((A + left) % B);



    }
    return count;

}


console.log(candles(5, 2));
