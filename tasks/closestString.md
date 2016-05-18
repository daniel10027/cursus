The distance between two strings of equal length is the number of indices where these strings differ. For example, the distance between the strings "abcde" and "bbcae" is 2.

You are given a string containing only lowercase English letters with no two letters appearing an equal number of times.

Find a new string that has the same length, contains at most K different letters, and has the smallest possible distance with the given string. If there are several such strings, choose the lexicographically smallest one.

Example

closestString("bacbab", 2) = "baabab"

[input] string s

A string containing only lowercase English letters. No two letters appear the same number of times in s [input] integer k

A positive integer - the maximum number of different characters that may be used in the result [output] string
