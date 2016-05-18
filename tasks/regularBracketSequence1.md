A bracket sequence is called regular if it is possible to insert some numbers and signs into the sequence in such a way that the new sequence will represent a correct arithmetic expression.

For a string consisting of only '('s and ')'s, determine if it is a regular bracket sequence or not.

Example

Given ()() we could insert (1 + 2) * (2 + 4) which is a valid arithmetic expression, hence: regularBracketSequence1("()()") = true

[input] string sequence

[output] boolean

true if the bracket sequence is regular, false otherwise
