function companyBotStrategy(trainingData) {
  var c = 0,
    s = 0;
  for (var i = 0; i < trainingData.length; i++) {
    if (trainingData[i][1] === 1) {
      c++;
      s += trainingData[i][0];
    }
  }
  return c === 0 ? 0 : s / c;
}