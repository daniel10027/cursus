function createAnagram(s: string, t: string) {

    var count = 0;
    var n = s.length;

    for (var i = 0; i < n; i++) {
        var index = t.indexOf(s[i]);

        if (index != -1) {
            count++;
            t = t.split("").filter((e, i) => {
                return i != index;
            }).join("");
        }
    }
    return n - count;

}