function visitsOnCircularRoad(N, visitsOrder) {
	cur = 1
	res = 0
	for (i = 0; i < visitsOrder.length; i++) {
		res += Math.min(Math.abs(visitsOrder[i] - cur), N - Math.abs(visitsOrder[i] - cur))
		cur = visitsOrder[i]
	}
	return res
}