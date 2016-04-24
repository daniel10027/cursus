function isArithmeticProgression(sequence) {

    var difference = sequence[1] - sequence[0];
    for (var i = 2; i < sequence.length; i++) {
        if (Math.abs(sequence[i] - sequence[i - 1]) !== difference) {
            return false;
        }
    }
    return true;
}
