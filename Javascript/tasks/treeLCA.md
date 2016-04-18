# Description
You are given a tree with vertices numbered from 0 to N - 1. The tree is inputed as an array parent where parent[i] is the parent of the ith node of the tree. The root of the tree is the vertex number 0 and it is its own parent.

Find the lowest common ancestor of two given vertices.

Example

For parent = [0, 0, 0], v1 = 1 and v2 = 2, the output should be treeLCA(parent, v1, v2) = 0.

[input] array.integer parent

The array of parents. [input] integer v1

The number of the 1st vertex. [input] integer v2

The number of the 2nd vertex. [output] integer

The number of the lowest common ancestor of v1 and v2.
