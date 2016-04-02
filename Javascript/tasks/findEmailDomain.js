function findEmailDomain(address) {
	var ans = address.split("@");
	return ans[ans.length - 1]
}
