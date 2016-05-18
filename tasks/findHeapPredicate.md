# Description
**Binary heaps** are commonly implemented with an array.

Let n be the number of elements in the heap. The heap nodes have indices from `0` to `n - 1`, the root has index `0`. For every valid `i` the following is true:

if `2i + 1 < n` then the left son of the **i<sup>th</sup>** node has an index `2i + 1`. Otherwise it doesn't exist. if `2i + 2 < n` then the right son of the **i<sup>th</sup>** node has an index `2i + 2`. Otherwise it doesn't exist. if the ith node has a parent, its index is `floor((i - 1) / 2)`. Given an array representing a heap, return a predicate defined for it.

## Example
For `heap = [1, 3, 2, 5, 3, 2]`, the output should be:

```javascript
findHeapPredicate(heap) = "<="
```

For `heap = [1, 3, 2, 5, 3, 1]`, the output should be:

```javascript
findHeapPredicate(heap) = "!"
```

- [input] array.integer heap

  A non-empty array of integers.

- [output] string
  - If each node is `≥` each of its children, return `">="`
  - If each node is `≤` each of its children, return `"<="`
  - If both predicates are correct for the given heap, return `"?"`
  - If array heap doesn't represent a correct heap, return `"!"`
