function theFile(version1, version2) {
    var len1 = version1.length,
        len2 = version2.length;
    var maxLen = [
            []
        ],
        take = [
            []
        ];
    for (var j = 0; j <= len2; j++) {
        maxLen[0].push(0);
        take[0].push(false);
    }
    for (var i = 1; i <= len1; i++) {
        maxLen.push([0]);
        take.push([false]);
        for (var j = 1; j <= len2; j++) {
            maxLen[i].push(0);
            take[i].push(false);
            if (version1[i - 1] == version2[j - 1]) {
                maxLen[i][j] = maxLen[i - 1][j - 1] + 1;
                take[i][j] = true;
            } else {
                maxLen[i][j] = Math.max(maxLen[i - 1][j], maxLen[i][j - 1]);
            }
        }
    }
    var answer = [],
        i = len1,
        j = len2;
    while (i > 0 && j > 0) {
        if (take[i][j]) {
            i--;
            j--;
            answer.push(version1[i]);
        } else {
            if (maxLen[i - 1][j] > maxLen[i][j - 1]) {
                i--;
            } else {
                j--;
            }
        }
    }
    return answer.reverse().join('');
}