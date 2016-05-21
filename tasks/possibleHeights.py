def possibleHeights(parent):

    edges = [[] for i in range(len(parent))]
    height = [0 for i in range(len(parent))]
    isPossibleHeight = [False for i in range(len(parent))]

    def initGraph(parent):
        for i in range(1, len(parent)):
            edges[parent[i]].append(i)

    def calcHeight(v):
        for u in edges[v]:
            calcHeight(u)
            height[v] = max(height[v], height[u]+1)

        countHeights = [[] for i in range(len(edges))]
        for i in range(len(edges[v])):
            u = edges[v][i]
            countHeights[height[u]].append(u)
        edges[v] = []
        for i in range(len(edges) - 1, -1, -1):
            for j in range(len(countHeights[i])):
                edges[v].append(countHeights[i][j])

    def findNewHeights(v, tailHeight):
        isPossibleHeight[max(height[v], tailHeight)] = True
        firstMaxHeight = tailHeight + 1
        secondMaxHeight = tailHeight + 1
        if len(edges[v]) > 0:
            firstMaxHeight = max(firstMaxHeight, height[edges[v][0]] + 2)
        if len(edges[v]) > 1:
            secondMaxHeight = max(secondMaxHeight, height[edges[v][1]] + 2)
        if len(edges[v]) > 0:
            findNewHeights(edges[v][0], secondMaxHeight)
        for i in range(1, len(edges[v])):
            findNewHeights(edges[v][i], firstMaxHeight)

    initGraph(parent)
    calcHeight(0)
    findNewHeights(0, 0)

    heights = []
    for i in range(len(parent)):
        if isPossibleHeight[i]:
            heights.append(i)
    return heights
