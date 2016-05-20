function numberOfEvenDigits($n) {
  $e = 0;
  $s = str_split($n);
  for($i = 0; $i < count($s); $i++)
    $s[$i] & 1 ? 0 : $e++ ;
  return $e;
}
