# Description

You have deposited a specific amount of dollars into your bank account. Each year your balance increases at the same growth rate. Find out how long it would take for your balance to pass a specific threshold with the assumption that you don't make any additional deposits.

## Example

For `deposit = 100`, `rate = 10` and `threshold = 130`, the output should be

```javascript
depositProfit(deposit, rate, threshold) = 3.
```

- [input] integer deposit

  The initial deposit as a positive integer.

- [input] integer rate

  The rate of increase as a positive integer from 1 to 100 inclusive.

- [input] integer threshold

  The target balance as a positive integer strictly greater than deposit.

- [output] integer

  The number of years it would take to hit the threshold.
