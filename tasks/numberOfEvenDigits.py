def numberOfEvenDigits(n):
  r=0
  while n!=0:
    if n%2==0: r+=1
    n/=10
  return r
