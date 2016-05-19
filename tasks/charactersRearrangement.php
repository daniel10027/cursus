function charactersRearrangement($string1, $string2) {
  $s1 = str_split($string1);
  sort($s1);
  $s2 = str_split($string2);
  sort($s2);
  if (count($s1) !== count($s2)) return false;
  return count(array_diff($s1,$s2)) ? false : true;
}
