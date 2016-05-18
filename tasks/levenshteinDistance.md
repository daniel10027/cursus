The Levenshtein distance between two strings is the number of single-character deletions, insertions, or substitutions required to transform one string into the other.

Example

```
For 'fight' and 'friend' the Levenshtein distance is 4.

The steps are as follows:

insert 'r' to get 'fright';
substitute 'g' for 'e' to get 'frieht';
substitute 'h' for 'n' to get 'frient';
substitute 't' for 'd' to get 'friend'.
[input] string string1

[input] string string2

[output] integer

The Levenshtein distance between string1 and string2.
```
