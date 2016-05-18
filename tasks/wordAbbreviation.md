# Description
Let's map the letters of the English alphabet to powers of 2 as follows

a = 20 = 1, b = 21 = 2, c = 22 = 4, d = 23 = 8, etc.

Then define a sum of a word as the sum of the corresponding powers of two of the word's letters. For example,

sum("abac") = 1 + 2 + 1 + 4 = 8.

For a word w that contains only English letters we can define its abbreviated form aw as follows:

```
aw also contains only English letters;
w and aw have the same sum as defined above;
the letters of aw are placed in a strictly increasing alphabetical order.
```

Find the abbreviated form for the given word. It is guaranteed that for the test inputs such form always exist (there are actually some words for which an abbreviated form doesn't exist,e.g. "zz").

Note: the abbreviated form is guaranteed to be unique, if exists.

Example

```
For a = "aaaaa", the output should be
wordAbbreviation(a) = "ac";
For a = "abcabc", the output should be
wordAbbreviation(a) = "bcd".

[input] string a

[output] string
```
