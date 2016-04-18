function telephoneGame(messages) {
	var answer = -1;
	for (var i = 1; i < messages.length; i++) {
		if (messages[i] !== messages[i - 1]) {
			answer = i;
			break;
		}
	}
	return answer;
}
