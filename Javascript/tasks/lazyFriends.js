function lazyFriends(houses, maxDist) {
    var result = [];
    var left = 0,
        right = 0;
    for (var i = 0; i < houses.length; i++) {
        while (houses[i] - houses[left] > maxDist) {
            left++;
        }
        while (right + 1 < houses.length && houses[right + 1] - houses[i] <=
            maxDist) {
            right++;
        }
        result.push(right - left);
    }
    return result;
}