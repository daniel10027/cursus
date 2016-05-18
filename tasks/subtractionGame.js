function subtractionGame(n) {
	var checkFirstWins = function (n, move) {
		if (n <= 0) {
			return true;
		}
		for (var i = 1; i <= move; i++) {
			if (!checkFirstWins(n - i, move + 1)) {
				return true;
			}
		}
		return false;
	};
	return checkFirstWins(n, 1);
}