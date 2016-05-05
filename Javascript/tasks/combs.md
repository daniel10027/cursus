# Description

Miss X has only two combs in her possession, both of which are old and miss a tooth or two. She also has many purses of different length, in which she carries the combs. The only way they fit is horizontally and without overlapping. Given teeth' positions on both combs, find the minimum length of the purse she needs to take them with her.

It is guaranteed that there is at least one tooth at each end of the comb. It is also guaranteed that the total length of two strings is smaller than 32.

## Example

For `comb1 = "*..*"` and `comb2 = "*.*"`, the output should be

```javascript
combs(comb1, comb2) = 5.
```

Although it is possible to place the combs like on the first picture, the best way to do this is either picture 2 or picture 3.

![exemple](https://codefightsuserpics.s3.amazonaws.com/tasks/combs/img/cbs.png?_tm=1460811846443)

- **[input]** string comb1

  A comb is represented as a string. If there is an asterisk ('`*`') in the ith position, there is a tooth there. Otherwise there is a dot ('.'), which means there is a missing tooth on the comb.

- **[input]** string comb2

  The second comb is represented in the same way as the first one.

- **[output]** integer

  The minimum length of a purse Miss X needs.
