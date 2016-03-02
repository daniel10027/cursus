function charactersRearrangement(string1, string2) {

  var characters1 = string1.split(''),
      characters2 = string2.split(''),
      correct = true;

  characters1.sort();
  characters2.sort();

  for (var i = 0; i < Math.max(characters1.length, characters2.length); i++) {
    if (characters1[i] !== characters2[i]) {
      correct = false;
    }
  }

  return correct;
}
