# Description
Determine if a number can be expressed as a sum of some consecutive positive integers.

## Example

```
isSumOfConsecutive(9) = true as 2 + 3 + 4 = 9

isSumOfConsecutive(8) = false
```

- [input] integer n

  a positive integer greater than 1

- [output] boolean

  true if it is possible to express n as a sum of some (at least two) consecutive positive integers, false otherwise

## Solutions
- Python

```python
  def isSumOfConsecutive(n):
      for i in range(n):
          s = 0
          for j in range(i, n):
              s += j
              if s == n:
                  return True
      return False
```

```c++

bool isSumOfConsecutive(int n) {
    for(int i=1;i<=n-1;i++)
    {
        for(int j=i+1;j<=n;j++)
        {
            int top=0;
            for(int k=i;k<=j;k++)
            {
                top+=k;
            }
            if (top==n) return true;
        }
    }
    return false;
}
```
