## Description

Among all rectangles that have a perimeter of P, find the dimensions of the one whose area is the largest.

## Example:

>RectanglePair(100) = [25, 25]


    input integer P
        A positive integer

    output array.float
        Array of two elements, the length and the width of the rectangle of the maximum area.

## My Solution

``` javascript
RectanglePair = P =>[P/4,P/4]
```

```java
double[] RectanglePair(int P){
    return new double[]{P/4f,P/4f}
}
```
