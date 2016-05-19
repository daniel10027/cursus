def isOneSwapEnough(inputString):

    badPairs = [[], []]
    badPairsCnt = 0
    for i in range(len(inputString) / 2):
        a = inputString[i]
        b = inputString[len(inputString) - i - 1]
        if a != b:
            if badPairsCnt == 2:
                return False
            if ord(a) > ord(b):
                t = a
                a = b
                b = t

            badPairs[badPairsCnt] = [a, b]
            badPairsCnt += 1
    if badPairsCnt == 0:
        return True
    elif badPairsCnt == 1:
        if len(inputString) % 2 == 0:
            return False
        c = inputString[len(inputString) / 2]
        return badPairs[0][0] == c or badPairs[0][1] == c
    else:
        return badPairs[0][0] == badPairs[1][0] and badPairs[0][1] == badPairs[1][1]
