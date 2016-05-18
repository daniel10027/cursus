function isUnstablePair(filename1, filename2) {
    return filename2 < filename1 && filename2 > filename1.toUpperCase()
}