## Description
A spy is trying to crack a combination lock which has a numeric keypad with 10 digits on it. He knows that the code is an 8-digit number without leading zeros. He has also taken fingerprints from the pad to find out which buttons are pressed to enter the code. You know that a button has a fingerprint on it if and only if the digit on it is in the code.

What is the number of all possible code combinations that satisfy the information the spy has?

### Example

secretCode([false,true,false,false,false,false,false,false,false,false]) = 1

[input] array.boolean a

A boolean array of length 10. a[i] is true if and only if the button with digit i has fingerprints on it.
[output] integer

The number of possible code combinations (0 if the provided information is contradictory).
