function spiralNumbers(n) {
	var m = new Array(n),
		directions = [
			[0, 1],
			[1, 0],
			[0, -1],
			[-1, 0]
		],
		currentDirectionIndex = 0,
		currentRow = 0,
		currentColumn = 0,
		currentNum = 1,
		tmpRow,
		tmpColumn;
	for (var i = 0; i < n; i++) {
		m[i] = new Array(n);
	}
	for (var i = n * n; i > 0; i--) {
		m[currentRow][currentColumn] = currentNum;
		currentNum++;
		if (i > 1) {
			// Determine the next cell
			while (true) {
				tmpRow = currentRow + directions[currentDirectionIndex][0];
				tmpColumn = currentColumn + directions[currentDirectionIndex][1];
				if (tmpRow < 0 || tmpRow >= n || tmpColumn < 0 || tmpColumn >= n || m[tmpRow][tmpColumn]) {
					currentDirectionIndex = (currentDirectionIndex + 1) % 4;
				} else {
					currentRow = tmpRow;
					currentColumn = tmpColumn;
					break;
				}
			}
		}
	}
	return m;
}
