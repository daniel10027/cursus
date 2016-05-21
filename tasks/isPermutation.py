def isPermutation(n, inputArray):
  for i in range(1,n+1):
    if i not in inputArray:
      return False
  return True
