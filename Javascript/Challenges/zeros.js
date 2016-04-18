Zeros = N => {
  c = 0
  for (i = 5; N / i >= 1; i *= 5) 
    c += Math.floor(N / i)
  return c
}