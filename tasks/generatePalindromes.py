from itertools import permutations as p
def generatePalindromes(s):
    r=[]
    if len(set(s))==1: return [s]
    for i in p(s):
        i=''.join(i)
        if i==i[::-1] and i not in r: r.append(i)
    return sorted(r)
