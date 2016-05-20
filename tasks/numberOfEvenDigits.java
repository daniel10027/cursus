int numberOfEvenDigits(int n) {

  int c = 0;
  while(n)
  {
    if(n%2==0)
      c++;
    n /= 10;
  }
  return c;
}
