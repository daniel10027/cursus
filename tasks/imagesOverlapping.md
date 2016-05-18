# Description

A monochrome image may be represented by a 2-dimensional array of booleans for each cell of which true means that the corresponding pixel of the image is black, while false means it's white. Given two images, find the number of the ways to place the second image over the first one in such a way that each pixel of the second image is above some pixel of the first one and no pair of black pixels are placed above each other.

## Example

For

```
largeImg = [[false, true, false],
            [true, false, true]]
```

and

`smallImg = [[true, false]]` the output should be :

```javascript
imagesOverlapping(largeImg, smallImg) = 2.
```

- **[input]** array.array.boolean largeImg

  A non-empty matrix of booleans representing an image.

- **[input]** array.array.boolean smallImg

  A non-empty matrix of booleans representing an image. It's guaranteed that both dimensions of smallImg don't exceed the corresponding dimensions of largeImg.

- **[output]** integer

  The number of ways the placement can be made.
