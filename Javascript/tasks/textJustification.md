# Description
Given an array of words and a length L, format the text such that each line has exactly L characters and is fully (left and right) justified. Words should be packed in a greedy approach; that is, pack as many words as it is possible in each line. Add extra spaces when necessary so that each line has exactly L characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right. For the last line of text and lines with one word only, it should be left justified and no extra space is inserted between words.

## Example
For words

```
['This', 'is', 'an', 'example',
    'of', 'text', 'justification.']
and L = 16 the answer is

[
    'This    is    an',
    'example  of text',
    'justification.  '
]
```

- [input] array.string words

  array of words, each word is guaranteed not to exceed L in length.

- [input] integer L

  length of lines

- [output] array.string

  formatted text as an array of lines
