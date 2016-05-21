# Description

The height of a tree is the number of edges on the longest downward path between the root and a leaf.

You are given a tree with vertices numbered from 0 to N - 1\. The tree is given as an array parent, where parent[i] is the parent of the ith node of the tree. The root of the tree is the vertex number 0, and it is its own parent.

By changing the tree root, one can obtain different trees of, possibly, different heights. Find all possible heights which the tree may have after its root is changed.

## Example

For `parent = [0, 0, 1, 4, 1]`, the output should be :

```javascript
possibleHeights(parent) = [2, 3]
```

The tree's height will be 2 if either vertex 1 or 4 is a root, and 3 if some other vertex is a root.

## Input/Output

- **[input]** array.integer parent

  Array of parents.

  **Constraints:**

  1 ≤ parent.length ≤ 15,

  0 ≤ parent[i] ≤ 15.

- **[output]** array.integer

  A sorted array of all possible distinct heights.
