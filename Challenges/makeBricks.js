makeBricks = (s, b,g)=> {
    while(g>=5 && b>0) {g-=5;b--}
     while(g>=1 && s>0) {g--;s--}
    return g==0;
}
