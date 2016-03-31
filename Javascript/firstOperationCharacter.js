function firstOperationCharacter(expr) {
  var balance = 0,
    maxAdditionPriority = -1,
    maxMultiplicationPriority = -1,
    additionIndex = -1,
    multiplicationIndex = -1;
  for (var i = 0; i < expr.length; i++) {
    if (expr[i] === "(") {
      balance++;
    }
    if (expr[i] === ")") {
      balance--;
    }
    if (expr[i] === "+") {
      if (balance > maxAdditionPriority) {
        maxAdditionPriority = balance;
        additionIndex = i;
      }
    }
    if (expr[i] === "*") {
      if (balance > maxMultiplicationPriority) {
        maxMultiplicationPriority = balance;
        multiplicationIndex = i;
      }
    }
  }
  if (maxAdditionPriority > maxMultiplicationPriority) {
    return additionIndex;
  } else {
    return multiplicationIndex;
  }
}