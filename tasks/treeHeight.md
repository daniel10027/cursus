# Description

You are given a tree with vertices numbered from `0` to `N - 1`. The tree is input as an array parent where `parent[i]` is the parent of the `ith` node of the tree. The root of the tree is the vertex number 0 and it is its own parent.

Find the height of the given tree.

## Example

For `parent = [0, 0, 1, 4, 1]`, the output should be :

```javascript
treeHeight(parent) = 3
```

Input/Output

[time limit] 4000ms (js) [input] array.integer parent

The array of parents.

Constraints: 5 ≤ parent.length ≤ 15, 0 ≤ parent[i] ≤ 10.

[output] integer
