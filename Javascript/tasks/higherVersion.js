function higherVersion(ver1, ver2) {
    var v1 = parseInt(ver1.split(".").join(""))
    var v2 = parseInt(ver2.split(".").join(""))
    return v1 > v2
}