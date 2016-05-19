# Description

The GoDaddy Website Builder product helps small businesses easily create websites. Let's say we are going to add a feature where the name of a business is automatically placed on top of a large "hero" image on the landing page of the site.

To do so, we need to find a position on the image where the text will be the most readable. If the text is placed on an area of the image that is too dark, it will be difficult for the site visitors to read it (for simplicity's sake, let's only consider black text on a grayscale image). We will define the optimal position of the text as the position where the mean pixel brightness inside the bounding box for the text is maximized.

You are given a grayscale image as a 2D array of pixels with the height and width of the text's rectangular bounding box. You must return the bounding box's top-left corner coordinates for the optimal text position. If there is more than one optimal position, return the top-left-most one.

## Example

For

```javascript
image = [[10,  50,  90, 65],
         [10, 200, 255, 30],
         [10, 150,  30, 15]]
```

`height = 2` and `width = 3`, the output should be :

```javascript
textOverlayOnHeroImage(image, height, width) = [0, 1]
```

Both bounding boxes with top-left coordinates at [0, 1] and at [1, 1] have a maximal mean pixel brightness equal to 690 / 6 = 115\. Thus, the answer is [0, 1], as it is the topmost one.

See the resulting bounding box in the image below.

![Exemple](https://codefightsuserpics.s3.amazonaws.com/tasks/textOverlayOnHeroImage/img/example.png?_tm=1460818457744)

- **[input]** array.array.integer image

  Array of non-negative integers less than 256.

- **[input]** integer height

  0 < height ≤ image.length

- **[input]** integer width

  0 < width ≤ image[0].length

- **[output]** array.integer

  Array of two integers: indices of row and column for the optimal position, respectively.
