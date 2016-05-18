function isInsideTheCircle(xa, ya, xc, yc, rc) {
    var dist = (xa - xc) * (xa - xc) + (ya - yc) * (ya - yc);
    rc *= rc;
    if (dist < rc) {
        return true;
    }
    return false;
}