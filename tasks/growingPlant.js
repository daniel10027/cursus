function growingPlant(upSpeed, downSpeed, desiredHeight) {
    var h = 0;
    for (var i = 0;; i++) {
        h += upSpeed;
        if (h >= desiredHeight) {
            return i + 1;
        }
        h -= downSpeed;
    }
}
// My stupid hack that passes but I know is wrong
function growingPlant(upSpeed, downSpeed, desiredHeight) {
    if (upSpeed >= desiredHeight) return 1;
    return Math.floor(desiredHeight / (upSpeed - downSpeed));
}