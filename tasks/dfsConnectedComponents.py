def dfsConnectedComponents(matrix):

    def dfs(currentVertex, visited):
        visited[currentVertex] = True
        for next_vertex in range(len(matrix[0])):
          if not matrix[currentVertex][next_vertex] or visited[next_vertex]:
            continue
          dfs(next_vertex, visited)

    visited = []
    componentsCount = 0

    for i in range(len(matrix)):
        visited.append(False)

    for startVertex in range(len(matrix)):
        if not visited[startVertex]:
            dfs(startVertex, visited)
            componentsCount += 1

    return componentsCount
