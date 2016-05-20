std::vector<int> dijkstraDistances(std::vector<std::vector<int> > matrix, int startVertex) {

  std::vector<bool> used(matrix.size());
  std::vector<int> distance(matrix.size(), INT_MAX);
  distance[startVertex] = 0;

  for (int i = 0; i < matrix.size(); i++) {
    int chosenIndex = -1;
    for (int j = 0; j < matrix.size(); j++) {
      if (!used[j] && (chosenIndex == -1 ||
                       distance[chosenIndex] > distance[j])) {
        chosenIndex = j;
      }
    }
    used[chosenIndex] = true;
    for (int j = 0; j < matrix.size(); j++) {
      if (matrix[chosenIndex][j] != -1 &&
          distance[j] > distance[chosenIndex] + matrix[chosenIndex][j]) {
        distance[j] = distance[chosenIndex] + matrix[chosenIndex][j];
      }
    }
  }

  return distance;
}
