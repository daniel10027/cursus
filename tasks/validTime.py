def validTime(time):

    def charToInt(symbol):
        return ord(symbol) - ord('0')

    hours = charToInt(time[0]) * 10 + charToInt(time[1])
    minutes = charToInt(time[3]) * 10 + charToInt(time[4])

    if hours < 24 and minutes < 60:
        return True
    return False
