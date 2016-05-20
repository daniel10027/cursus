int arrayMaxConsecutiveSum2(std::vector<int> x) {
  int best = x[0];
  for(int i = 0; i < x.size(); ++i)
  {
    int tmp = 0;
    for(int j = i; j < x.size(); ++j)
    {
      tmp += x[j];
      if(tmp > best)
        best = tmp;
    }
  }
  return best;
}
