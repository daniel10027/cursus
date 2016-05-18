# Description
A periodic sequence S is defined as follows:

`S[0], A, B and M` are all given positive integers `S[i] for i > 0` is equal to `(A * S[i - 1] + B) mod M`Find the period of S, i.e. the smallest integer `T` such that for each `i > k (for some integer k): S[i] = S[i + T]`.

## Example
Given `S0 = 11, A = 2, B = 6 and M = 12`, the sequence would look like this `11, 4, 2, 10, 2, 10, 2, 10, 2, 10...`, hence:

```javascript
periodicSequence([11, 2, 6, 12]) = 2
```

- [input] integer S0

  positive integer representing S[0]

- [input] integer A

  positive integer

- [input] integer B

  positive integer

- [input] integer M

  positive integer

- [output] integer

  sequence period
