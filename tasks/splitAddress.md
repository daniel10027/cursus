Address of a website often has the following form: <protocol>://<domain>.com[/<context>] where <protocol>, <domain> and <context> are non-empty strings consisting of lowercase English letters. Note that there may be no <context> part in an address.

We need an algorithm that splits an address into an array of its parts: <protocol>, <domain> and <context> (if there is one).

Example

```
splitAddress('http://codefights.com') = ['http', 'codefights']
splitAddress('http://stackoverflow.com/questions') = ['http', 'stackoverflow', 'questions']
```

[input] string address

valid website address [output] array.string

Address elements <protocol>, <domain> and <context> placed in the given order.
