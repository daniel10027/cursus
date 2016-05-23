def smallestMultiple(left, right):

    candidate = 1
    while True:
        correct = True
        for divisor in range(left, right+1):
            if candidate % divisor != 0:
                correct = False
                break
        if correct:
            return candidate
        candidate += 1
