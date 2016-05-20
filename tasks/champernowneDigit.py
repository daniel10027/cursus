def champernowneDigit(n):

    i = 1
    while True:
        number = i
        digits = []
        while (number > 0):
            digits.append(number % 10)
            number /= 10
        digits.reverse()
        if n <= len(digits):
            return digits[n - 1]
        n -= len(digits)
        i += 1
