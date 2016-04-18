# Description

Caesar Box is a simple transposition cipher used in the Roman Empire. It is described as the following two-step process:

The characters of the given message are broken into n lines of equal lengths and stacked up;
The letters from the resulting rectangle are written from top to bottom column by column.
Given a word, count the number of different n such that the initial message is the same as the double-encoded message.

## Example

For message = `'abaaba'` the answer is `2` (it is possible to apply the encoding algorithm for n = 2 or n = 3).

For n = 2:

    1. The first encoding: 'abaaba' -> ab -> 'aabbaa';
                                       aa
                                       ba

    2. The second encoding: 'aabbaa' -> aa -> 'abaaba'.
                                        bb
                                        aa

-   [input] string message

    A string of length more than 1.

-   [output] integer

    The number of above-described ns, `1 < n < message.length`.

## Solutions

#### C++

```c++
int caesarBoxCipherEncoding2(std::string inputString) {

  struct Helper
  {
    std::string encode(std::string s, int n) {
      std::string res = "";
      for (int i = 0; i < n; i++) {
        for (int j = 0; j < s.length() / n; j++) {
          res += s[j * n + i];
        }
      }
      return res;
    }
  };
  Helper h;

  int res = 0;
  int len = inputString.length();
  int sqrt_len = std::sqrt(len);
  for (int n = 2; n <= sqrt_len; n++) {
    if (len % n == 0) {
      if (h.encode(h.encode(inputString, n), n) == inputString) {

  if (n * n == len) {
    res += 1;
  }
          else {
        res += 2;
          }
      }
    }
  }

  return res;
}
```
