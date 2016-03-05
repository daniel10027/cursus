function nearestRoundNumber(value) {
  return (Math.floor(value / 10) + (value % 10 !== 0)) * 10;
}

function nearestRoundNumber2(value) {
 return Math.ceil(value/10)*10;
}
