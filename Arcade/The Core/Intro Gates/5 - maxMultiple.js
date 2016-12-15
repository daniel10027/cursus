function maxMultiple(divisor, bound) {

    for (var i = bound; i > 0; i--) {
        if (i % divisor == 0) return i;
    }
}
