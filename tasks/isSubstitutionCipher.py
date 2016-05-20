def isSubstitutionCipher(string1, string2):

    pair = [-1] * 26
    paired = [False] * 26

    for i in range(len(string1)):
        ch1 = ord(string1[i]) - ord('a')
        ch2 = ord(string2[i]) - ord('a')
        if pair[ch1] != ch2 and (paired[ch2] or pair[ch1] != -1):
            return False
        pair[ch1] = ch2
        paired[ch2] = True

    return True
