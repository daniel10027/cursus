function makeArrayConsecutive(sequence) {
    var max = sequence[0];
    var min = max;
    sequence.map(v => {
        max = Math.max(max, v);
        min = Math.min(min, v);
    });
    var ans = [];
    for (var i = min; i <= max; i++) {
        if (sequence.indexOf(i) == -1) ans.push(i);
    }
    return ans;
}

function makeArrayConsecutive(sequence) {
    var answer = [],
        current_position = 0;
    sequence.sort();
    for (var i = sequence[0]; i < sequence[sequence.length - 1]; i++) {
        if (sequence[current_position] !== i) {
            answer.push(i);
        } else {
            current_position++;
        }
    }
    return answer;
}