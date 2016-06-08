def treeHeight(parent):

    def dfs(v, graph):
        height = 0
        for i in range(len(graph[v])):
            to = graph[v][i]
            height = max(height, dfs(to, graph) + 1)
        return height

    graph = []

    for i in range(len(parent)):
        graph.append([])

    for i in range(1, len(parent)):
        graph[parent[i]].append(i)

    return dfs(0, graph)
