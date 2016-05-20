function decipher(cipher) {
  var s = "";

  while(cipher.length > 0) {
    var tmp = parseInt(cipher.substr(0, 2));
    if(!(tmp >= 97 && tmp <= 122)) {
      tmp = cipher.substring(0, 3);
    }
    s += String.fromCharCode(tmp);
    cipher = cipher.substr((tmp + "").length);
  }

  return s;
}
