# Description

Let's map the letters of the English alphabet to powers of 2 as follows

a = 20 = 1, b = 21 = 2, c = 22 = 4, d = 23 = 8, etc.

Then define a sum of a word as the sum of the corresponding powers of two of the word's letters. For example,

sum("abac") = 1 + 2 + 1 + 4 = 8

For a word w that contains only English letters we can define its abbreviated form aw as follows: `*`aw also contains only English letters;

w and aw have the same sum as defined above; the letters of aw are placed in a strictly increasing alphabetical order. Note: the abbreviated form is guaranteed to be unique, if exists.

Find the difference between two given words a and b, i.e. a word c, such that sum(a) - sum(b) = sum(c) and c is in the abbreviated form.

It is guaranteed that sum(a) > sum(b).

Example

For a = "acdg" and b = "ac", the output should be wordSubtraction(a, b) = "dg"; For a = "acdg" and b = "ab", the output should be wordSubtraction(a, b) = "bdg"; For a = "acdg" and b = "abc", the output should be wordSubtraction(a, b) = "bcg". [input] string a

A word in the abbreviated form.

[input] string b

A word in the abbreviated form.

[output] string

The result of the subtraction a - b in the abbreviated form.
