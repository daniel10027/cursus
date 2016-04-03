function cyclicQueue(commands) {
    var queue = [],
        answer = [],
        head = 0,
        tail = 0,
        sum = 0;
    const maxSize = 10;
    for (var i = 0; i < maxSize; i++) {
        queue.push(0);
    }
    for (var i = 0; i < commands.length; i++) {
        if (commands[i] === '-') {
            sum -= queue[head];
            head = (head + 1) % maxSize;
        } else {
            var value = 0;
            for (var j = 1; j < commands[i].length; j++) {
                value = value * 10 + commands[i].charCodeAt(j) - '0'.charCodeAt(
                    0);
            }
            sum += value;
            queue[tail] = value;
            tail = (tail + 1) % maxSize;
        }
        answer.push(sum);
    }
    return answer;
}