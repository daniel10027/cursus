# Description
E-mail validation is a widely known problem that can be difficult to solve for unexperienced programmer. In this task, however, not merely do you need to check if some e-mail is correct, but to count the number of correct e-mails that may be obtained from the given pattern.

In this task, a correct e-mail is a string satisfying the following conditions:

the string has exactly one character '@' in it; the string before '@' consists of one or more non-empty groups of lowercase letters from 'a' to 'e' inclusive, separated by '.'; the string after '@' consists of two or more non-empty groups of lowercase letters from 'a' to 'e' inclusive, separated by '.'. For example,

"a@b.e" "abcde.edcba@a.b.c.d.e" are correct e-mails, while those listed below are not:

"@a.a" (no non-empty groups of lowercase letters before '@') "a@a" (only one non-empty group of lowercase letters after '@') "a.b@c.d@e.e" (more than one '@' character) "aa..aa@a.a" (no lowercase letters between two consecutive '.'s) "abc@d.e.f" ('f' does not belong to the range ['a'..'e']) "abc.@a.a" (no letters between '.' and '@') "abc@a.a." (no letters after the last '.') Example

For pattern = "abcd@?bcd.ca", the output should be correctEmails(pattern) = 5.

The correct e-mails that may be obtained from this pattern are:

"abcd@abcd.ca" "abcd@bbcd.ca" "abcd@cbcd.ca" "abcd@dbcd.ca" "abcd@ebcd.ca" [input] string pattern

An e-mail pattern consisting of lowercase letters and symbols '?', '.' and '@'. Its length is not greater than 10.

[output] integer

The number of correct e-mails that may be obtained by replacing all '?' with the lowercase letters, '.' or '@'.
