def twoPolygons(p1, p2):
    def doubleSquare(polygon):
        square = 0
        for i in range(len(polygon)):
            a = polygon[i]
            b = polygon[(i + 1) % len(polygon)]
            square += a[0] * b[1] - a[1] * b[0]
        return square

    return doubleSquare(p1) == doubleSquare(p2)
