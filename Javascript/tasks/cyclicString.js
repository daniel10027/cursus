function cyclicString(s1) {
    for (var answer = 1; answer < s1.length; answer++) {
        var correct = true;
        for (var position = answer; position < s1.length; position++) {
            if (s1[position] !== s1[position - answer]) {
                correct = false;
            }
        }
        if (correct) {
            return answer;
        }
    }
    return s1.length;
}