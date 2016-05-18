function perfectTeamOfMinimalSize(n, candidates) {

    var MAX_MASK = 1 << n;

    var knowledge = [];
    for (var i = 0; i < candidates.length; i++) {
        knowledge.push(0);
        for (var j = 0; j < candidates[i].length; j++) {
            knowledge[i] |= 1 << candidates[i][j];
        }
    }
    var teamSize = [1];
    for (var i = 0; i < MAX_MASK; i++) {
        teamSize.push(-1);
    }
    for (var i = 0; i < teamSize.length; i++) {
        if (teamSize[i] === -1) {
            continue;
        }
        for (var j = 0; j < knowledge.length; j++) {
            var i2 = i | knowledge[j];
            if (teamSize[i2] == -1 || teamSize[i2] > teamSize[i] + 1) {
                teamSize[i2] = teamSize[i] + 1;
            }
        }
    }

    return teamSize[MAX_MASK - 1];
}
