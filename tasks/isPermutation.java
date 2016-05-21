boolean isPermutation(int num, int[] ar) {
  int n=ar.length;
  int x=num;
  int cnt=0;
  for(int i=0; i<n; )
  {
    if(ar[i]==x)
    {
      cnt++;
      x--;
      i=0;
      continue;
    }
    i++;
  }
  if(cnt==num)
    return true;
  else
    return false;
}
