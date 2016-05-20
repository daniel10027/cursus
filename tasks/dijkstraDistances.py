def dijkstraDistances(matrix, startVertex):

    # some big number is used as infinity
    # it's guaranteed that 10^9 is strictly larger
    # than the distance between any two vertices
    Infinity = int(10 ** 9)

    used = []
    distance = []

    for i in range(len(matrix)):
        distance.append(Infinity)
        used.append(False)
    distance[startVertex] = 0

    for i in range(len(matrix)):
        chosenIndex = -1
        for j in range(len(matrix)):
            if (not used[j] and (chosenIndex == -1 or
                distance[chosenIndex] > distance[j])):
                chosenIndex = j
        used[chosenIndex] = True
        for j in range(len(matrix)):
            if (matrix[chosenIndex][j] != -1 and
                distance[j] > distance[chosenIndex] + matrix[chosenIndex][j]):
                distance[j] = distance[chosenIndex] + matrix[chosenIndex][j]

    return distance
