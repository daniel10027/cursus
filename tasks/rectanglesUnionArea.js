def rectanglesUnionArea(r):
    a = [[0]*100 for i in range(100)]
    for i in range(len(r)):
        for j in range(r[i][0],r[i][2]):
            for g in range(r[i][1],r[i][3]):
                a[g][j]=1
    x = 0
    for i in a:
        x+=i.count(1)
    return x


function rectanglesUnionArea(rectangles) {
var a = 

    for(var i=0;i)
}
