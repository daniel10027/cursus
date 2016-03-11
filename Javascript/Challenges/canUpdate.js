function canUpdate(newUsername, curUsername, isChanged, users) {
	for (var i = 0; i < newUsername.length; i++) {
		if (!(/[A-Za-z0-9_]/g).test(newUsername[i])) return false;
	}
	if (isChanged) {
		return newUsername.toLowerCase() == curUsername.toLowerCase();
	} else {
		users = users.map(v => v.toLowerCase());
		return users.indexOf(newUsername.toLowerCase()) == -1;
	}
}
