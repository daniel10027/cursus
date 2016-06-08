def whoseTurn(p):

    def color(r, c):
        return (r + c) % 2

    s = 0
    for i in range(4):
        c = ord(p[i * 3 + 0]) - ord('a')
        r = ord(p[i * 3 + 1]) - ord('0')
        s += color(r, c)

    return s % 2 == 0
