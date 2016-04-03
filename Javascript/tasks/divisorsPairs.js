function divisorsPairs(sequence) {
    var result = 0;
    for (var i = 0; i < sequence.length; i++) {
        for (var j = i + 1; j < sequence.length; j++) {
            if (sequence[i] % sequence[j] === 0 || sequence[j] % sequence[i] ===
                0) {
                result++;
            }
        }
    }
    return result;
}