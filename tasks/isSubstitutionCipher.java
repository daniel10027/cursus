boolean isSubstitutionCipher(String string1, String string2) {

  int[] c1 = new int[26];
  int[] c2 = new int[26];
  for(int i = 0; i < string1.length(); i++)
    c1[string1.charAt(i) - 'a']++;

  for(int i = 0; i < string2.length(); i++)
    c2[string2.charAt(i) - 'a']++;

  List<Integer> l1 = new ArrayList<Integer>();
  List<Integer> l2 = new ArrayList<Integer>();

  for(int i = 0; i < 26; i++) {
    if(c1[i] > 0) l1.add(c1[i]);
    if(c2[i] > 0) l2.add(c2[i]);
  }

  Collections.sort(l1);
  Collections.sort(l2);

  return l1.equals(l2);

}

boolean isSubstitutionCipher(String string1, String string2) {

  int[] pair = new int[26];
  Arrays.fill(pair, -1);
  boolean[] paired = new boolean[26];

  for (int i = 0; i < string1.length(); i++) {
    int ch1 = string1.charAt(i) - 'a';
    int ch2 = string2.charAt(i) - 'a';
    if (pair[ch1] != ch2 && (paired[ch2] || pair[ch1] != -1)) {
      return false;
    }
    pair[ch1] = ch2;
    paired[ch2] = true;
  }

  return true;
}
