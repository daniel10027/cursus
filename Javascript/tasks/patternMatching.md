A pattern can be represented as a string containing lowercase English letters and special characters: questions marks and asterisks. Each question mark should be replaced by exactly one letter, and each asterisk should be replaced by zero or more letters (possibly different).

A string of letters matches a pattern if question marks and asterisks in the latter can be replaced by letters in such a way that pattern will become equal to a given string.

Does a given string match a given pattern?

Example

patternMatching("abacaba", "?*b?") = true

patternMatching("abacaba", "?*ca?") = false

[input] string input

a string of lowercase Latin letters

[input] string pattern

a string of lowercase Latin letters, question marks and asterisks

[output] boolean

true if input string matches pattern, false otherwise
