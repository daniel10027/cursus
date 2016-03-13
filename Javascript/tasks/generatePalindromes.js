function generatePalindromes(charactersSet) {
  var result = [];
  var N = charactersSet.length;
  var palindrome = [];
  var letterCnt = [];
  for (var i = 0; i < N; i++) 
    palindrome.push(0);
  for (var i = 0; i < 26; i++) 
    letterCnt.push(0);
  for (var i = 0; i < N; i++) {
    letterCnt[charactersSet.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  if (N % 2 === 1) {
    for (var i = 0; i < 26; i++) {
      if (letterCnt[i] % 2 === 1) {
        letterCnt[i]--;
        palindrome[Math.floor(N / 2)] = String.fromCharCode('a'.charCodeAt(0) + i);
        break;
      }
    }
  }
  var generate = function (idx) {
    if (idx >= Math.floor(N / 2)) {
      result.push(palindrome.join(""));
      return;
    }
    for (var i = 0; i < 26; i++) {
      if (letterCnt[i] >= 2) {
        letterCnt[i] -= 2;
        palindrome[idx] = String.fromCharCode('a'.charCodeAt(0) + i);
        palindrome[N - idx - 1] = String.fromCharCode('a'.charCodeAt(0) + i);
        generate(idx + 1);
        letterCnt[i] += 2;
      }
    }
  }
  generate(1);
  return result;
}