int rounders(int value) {

        int t = value;
        int c = 1;
        while(t / 10 > 0) {
                int d = t % 10;
                if(d >= 5) {
                        t = (t / 10) + 1;
                } else {
                        t /= 10;
                }
                c *= 10;
        }

        return t * c;
}
