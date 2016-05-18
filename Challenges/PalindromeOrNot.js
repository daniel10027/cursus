PalindromeOrNot = s => "" + (s = s.split('')) == s.reverse() ? 'Yes' : 'No'

function PalindromeOrNot(s) {
	return s == s.split("").reverse().join("") ? "Yes" : "No"
}