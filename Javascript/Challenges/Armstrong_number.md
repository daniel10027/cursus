# Description

An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits. Check if the given number is an Armstrong number.

## Example:

```Javascript
    Armstrong_number(407) = true
    43 + 03 + 73 = 64 + 343 = 407.
    Armstrong_number(23) = false
    22 + 32 = 13 ≠ 23.
```

-   [input] integer N

    1 ≤ N ≤ 109

-   [output] boolean

    true is the given number is an Armstrong number, false otherwise.

## Solutions

### My Solutions

```Javascript
Armstrong_number = n => {
	a = ("" + n).split('')
	l = a.length
	a.map(v => n -= Math.pow(v, l))
	return !n
}
```

### Shortest solutions
