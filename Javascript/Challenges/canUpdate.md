# Description
On one website, each user has a username. There're some rules concerning the usernames:

the username can contain only lowercase and uppercase English letters, digits and the `'_'` (underscore) symbols; each username is unique; it is possible to change the username only once; the username are not case sensitive, so "Bob" is the same name as "bob". Unfortunately, there's a bug on the website: it's impossible to change the way the username is shown on the profile page, i.e. change its case. For example, the user with 'johndoe' username can't change it to 'JohnDoe', because the system considers those usernames to be the same, and changing the name twice (for example from 'johndoe' to 'JohnDoeTmp' and to 'JohnDoe') is impossible.

Your task is to fix this bug. Create a function that checks if it is possible to change the username, i.e. return True if one of the following is true:

the newUsername and the curUsername differ only in the case; the newUsername is correct, there's no user in users with the same username, and the user hasn't already changed their username. Example:

For newUsername = "Sheik", curUsername = "Zelda", isChanged = false, users = ["Link", "Ganon", "Zelda"] the output should be canUpdate(newUsername, curUsername, isChanged, users) = true. newUsername is a valid username that no one has yet, and the user didn't change the username before.

For newUsername = "CASTOR", curUsername = "John", isChanged = false, users = ["Castor","Polux","John"] the output should be canUpdate(newUsername, curUsername, isChanged, users) = false. There's already a person with username "Castor" in the list.

For newUsername = "The\_Boss", curUsername = "the\_boss", isChanged = true, users = ["Snake","the_boss","Zero"] the output should be canUpdate(newUsername, curUsername, isChanged, users) = true. The person simply wants to change the case of the letters in his username.

[input] string newUsername

The new username the user wants. [input] string curUsername

The current username. It is guaranteed to be valid. [input] boolean isChanged

true if the user has already changed his username, false otherwise. [input] array.string users

The list of users. It is guaranteed that curUsername is present in users. [output] boolean

true if it is possible to change the username, false otherwise.

# Solutions

## My Solution

```Javascript
function canUpdate(newUsername, curUsername, isChanged, users) {
	for (var i = 0; i &lt; newUsername.length; i++) {
		if (!(/[A-Za-z0-9_]/g).test(newUsername[i])) return false;
	}
	if (isChanged) {
		return newUsername.toLowerCase() == curUsername.toLowerCase();
	} else {
		users = users.map(v => v.toLowerCase());
		return users.indexOf(newUsername.toLowerCase()) == -1;
	}
}
```

## Shortest Solution

```Javascript
canUpdate = (n, o, c, a)=> !a.find(t=>RegExp(t,'i').test(n))!=c & !/\\W/.test(n)
```
