# Description

Consider the "circular" alphabet: it is the same as the ordinary one but 'z' is followed by 'a'.

In such an alphabet one can define a k-shift for any `0 <= k < 26`. Applying such a shift will change each letter of the string with a letter that comes exactly k letters after. For instance, 3-shift will change 'a' to 'd' and 'y' to 'b'.

Given an initial string and its k-shift (for some unknown k) with some mistakes (a mistake means that a character was shifted incorrectly), find the minimal possible number of mistakes.

## Example

for `"xyza"` (as the initial string) and `"abdd"` (as its k-shift with mistakes) output should be `1`
for `"aw"` and `"aw"` output should be `0`

-   [input] string inputStr
    non-empty string consisting of lowercase English letters

-   [input] string encodedStr
    the k-shift of inputStr with some mistakes

-   [output] integer
    the minimum number of mistakes that could have been made during k-shifting
