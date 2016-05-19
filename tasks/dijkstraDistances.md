# Description

Given a connected directed weighted graph with no loops or multiple edges and the index of a start vertex, find the distances between the start vertex and each of vertices of the graph.

## Example

For

```javascript
matrix = [[-1, 3, 2],
          [2, -1, 0],
          [-1, 0, -1]]
```

and `startVertex = 0`, the output should be :

```javascript
dijkstraDistances(matrix, startVertex) = [0, 2, 2]
```

- **[input]** array.array.integer matrix

  The adjacency matrix of the given graph. Weight of each edge is represented by a non-negative integer. If an edge doesn't exist, the corresponding cell of the adjacency matrix contains -1.
