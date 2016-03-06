function swapCase(text) {
	var s = "";
	for (var i = 0; i < text.length; i++) {
		if (/[A-Z]/.test(text[i])) s += text[i].toLowerCase();
		else s += text[i].toUpperCase();
	}
	return s;
}