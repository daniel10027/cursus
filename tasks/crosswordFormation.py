def crosswordFormation(words):
    from itertools import permutations as perms
    from collections import defaultdict as ddic
    ans = 0
    for p in perms(words):
        M = ddic(int)
        a,b,c,d = p
        for i in xrange(2, min(len(a),len(b))):
            for p in xrange(len(a) - i):
                for q in xrange(len(b) - i):
                    M[a[p],a[p+i],b[q],b[q+i]] += 1
        for i in xrange(2, min(len(c),len(d))):
            for p in xrange(len(c) - i):
                for q in xrange(len(d) - i):
                    ans += M[c[p],d[q],c[p+i],d[q+i]]
    return ans
        