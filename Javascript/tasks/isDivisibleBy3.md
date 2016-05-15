# Description

A masked number is a string that consists of digits and one asterisk (`*`) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.

## Example

For `inputString = "1*0"`, the output should be :

```javascript
isDivisibleBy3(inputString) = ["120", "150", "180"]
```

- **[input]** string inputString

  A masked number

- **[output]** array.string

  Sorted array of strings representing all non-negative integers that correspond to the given mask and are divisible by 3.
