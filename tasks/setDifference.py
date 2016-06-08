def setDifference(A, B):

    A.sort()
    B.sort()
    C = []

    pos_b = 0
    for pos_a in range(len(A)):
        while pos_b < len(B) and B[pos_b] < A[pos_a]:
            pos_b += 1
        if A[pos_a] != B[pos_b]:
            C.append(A[pos_a])

    return C
