We want to make a row of bricks that is exactly goal inches long. We have some small bricks (1 inch each) and some big ones (5 inches each).
Return true if it is possible to build the row by choosing from the given bricks.

Example:

makeBricks(3, 1, 8) = true
It's possible to take one big brick and three small ones.

makeBricks(3, 1, 9) = false
There're not enough bricks to create a row of length goal.

makeBricks(2, 3, 9) = false
There's no way to make a row of length goal.

[input] integer small

The number of small bricks (1 inch).

```javascript
makeBricks = (s, b,g)=> {
    while(g>=5 && b>0) {g-=5;b--}
     while(g>=1 && s>0) {g--;s--}
    return g==0;
}
```
