A number of people are applying for a place in some team. Each of them has his own proficiency level (p.l.), which is represented as a positive integer, and the higher the level is - the better.

There are only n places in the team, and the recruiter hires only those who have their p.l. not less than m.

All applicants are standing in a queue and if the current one satisfies the required conditions, he is taken into the team right away. Once the team is full, all the remaining people are denied regardless of their p.l.

What is the total p.l. of the applicants that get be hired? It is guaranteed that all n places can be taken.

Example

```
For levels [4, 2, 3, 6, 2, 5, 4], n = 3, m = 4 the answer is 4 + 6 + 5 = 15.
```

[input] array.integer a

An array of positive integers, representing a queue of proficiency levels. [input] integer n

Positive integer. [input] integer m

Positive integer. [output] integer
