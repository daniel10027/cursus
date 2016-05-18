Check if a timestamps is strictly earlier than the other.

### Example

isEarlier([22, 30], [10, 59]) = false
isEarlier([0, 5], [1, 0]) = true
[input] array.integer time1

an array representing a timestamp in the format [hours, minutes]
[input] array.integer time2

an array of the same format as time1 representing another timestamp
[output] boolean

true if the timestamp in time1 is strictly earlier than in time2, false otherwise

#### Solution 1

```javascript
function isEarlier(time1, time2) {
  if (time1[0] > time2[0]) return false;
  if (time1[0] === time2[0]) return time1[1] < time2[1];
  return true;
}
```
#### Solution 2

```javascript
function isEarlier2(time1, time2) {
  t1 = time1[1] + 60 * time1[0]
  t2 = time2[1] + 60 * time2[0]
  return t1 < t2;
}
```
