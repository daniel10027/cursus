function isEarlier(time1, time2) {
    if (time1[0] > time2[0]) return false;
    if (time1[0] === time2[0]) return time1[1] < time2[1];
    return true;
}

function isEarlier2(time1, time2) {
    t1 = time1[1] + 60 * time1[0];
    t2 = time2[1] + 60 * time2[0];
    return t1 < t2;
}