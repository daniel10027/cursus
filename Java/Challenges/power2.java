Object power2(String s){

   BigInteger N = new BigInteger(s), o = BigInteger.ONE, l, h, m;
   //l,h,m stand for low, high, mid
   // o = 1
   for(int b = 301, r ; ; ){

       l = o;
       // a number with n digits will has its b-th root with about (n/b) digits, so I make high is a upper bound for the value we looking for
       h = o.shiftLeft(N.bitLength()/--b+1 );


       //using binary search for closet value in the range [low, high]
       while ( !l.equals(h) ){
               //while (low  < high)

           m = l.add(h).shiftRight(1);
               //mid = (low+high)/2

           r = m.pow(b).compareTo(N);
           if(r == 0)
                   // mid ^ b == N
               return (m +" "+(s=="1"?1:b)).split(" ");
           if(r == 1)
                   // mid ^ b > N, change the range to [low, mid]
               h = m;
           else
                   // the range will be [mid+1, high]
               l = m.add(o);
               // low = mid + 1
       }
   }

}
