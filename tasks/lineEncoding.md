**Description**

Given a string, return its encoding defined as follows:

*   First, the string is divided into the least possible number of disjoint **substrings** consisting of identical characters
    *   for example, `"aabbbc"` is divided into `["aa", "bbb", "c"]`
*   Next, each _substring_ with length greater than one is replaced with a concatenation of its length and the repeating character
    *   for example, _substring_ `"bbb"` is replaced by `"3b"`
*   Finally, all the new strings are concatenated together in the same order and a new string is returned.

**Example**

For `s = "aabbbc"`, the output should be  
`lineEncoding(s) = "2a3bc"`.

*   **[input] string s**

    String consisting of lowercase English letters.

*   **[output] string**

    Encoded version of `s`.
