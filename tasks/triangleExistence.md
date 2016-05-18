# Description

Check the existence of a triangle with the given side lengths. A necessary and sufficient condition for triangle existence is that the sum of any two of its sides must be strictly greater than the third side.

## Example

For `sides = [1, 2, 10]`, the output should be :

```javascript
triangleExistence(sides) = false
```

For `sides = [6, 2, 5]`, the output should be :

```javascript
triangleExistence(sides) = true
```

- [input] array.integer sides

  Array of three integers.

- [output] boolean

  true if some triangle with sides of length equal to the given integers exists, false otherwise.
