def caesarBoxCipherEncoding2(message):
    r = 0
    for i in range(2, len(message)):
        if len(message) % i != 0:
            continue
        if encode(encode(message, i), i) == message:
            r +=1

    return r

def encode(msg, n):
    r = ''
    for i in range(n):
        for c in range(i, len(msg), n):
            r += msg[c]
    return r
