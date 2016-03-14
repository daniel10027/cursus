# Description

You are given a recursive notation of a binary tree: each node of a tree is represented as a set of three elements:

-   value of the node;
-   left subtree;
-   right subtree.

So, a tree can be written as (value left\_subtree right\_subtree). If a node doesn't exist then it is represented as an empty set: (). For example, here is a representation of a tree in the given picture:

![image](https://codefightsuserpics.s3.amazonaws.com/tasks/treeBottom/img/tree.png?_tm=1442506891776)

`(2 (7 (2 () ()) (6 (5 () ()) (11 () ()))) (5 () (9 (4 () ()) ())))`

Your task is to obtain a list of nodes, that are the most distant from the tree root, in the order from left to right.

In the notation of a node its value and subtrees are separated by exactly one space character.

## Example

For the tree which notation is given above, the answer will be `[5, 11, 4]`.

-   [input] string tree

-   [output] array.integer
