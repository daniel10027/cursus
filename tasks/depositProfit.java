int depositProfit(int deposit, int rate, int threshold) {

  int[] fraction = new int[2];
  fraction[0] = deposit;
  fraction[1] = 1;
  int year = 0;

  while (fraction[0] < fraction[1] * threshold) {
    fraction[0] *=  rate + 100;
    fraction[1] *= 100;
    year++;
  }

  return year;
}
