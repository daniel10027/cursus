function nearestRoundNumber(value) {
return (Math.floor(value/10) + (value%10!==0))*10;
}
