def arrayMaxConsecutiveSum2(inputArray)
  (0...inputArray.size).map { |i|
    (1..inputArray.size - i).map { |j|
      inputArray[i, j].reduce(0, :+) }.max }.max
end
