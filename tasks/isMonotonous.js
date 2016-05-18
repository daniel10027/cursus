function isMonotonous(sequence) {
    if (sequence.length === 1) {
        return true;
    }
    var direction = sequence[1] - sequence[0];
    for (var i = 0; i < sequence.length - 1; i++) {
        if (direction * (sequence[i + 1] - sequence[i]) <= 0) {
            return false;
        }
    }
    return true;
}
