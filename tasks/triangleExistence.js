function triangleExistence(sides) {
	sides.sort((a, b) => a - b);
	return sides[0] + sides[1] > sides[2]
}
