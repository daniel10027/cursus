function centuryFromYear(year) {
  var c = Math.floor(year / 100);
  return (year % 100 === 0) ? c : ++c;
}
