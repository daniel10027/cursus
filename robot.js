// NOT WORKING

function robotPath(instructions, bound) {
  var x = 0;
  var y = 0;


  for (var i = 0; i < instructions.length; i++) {
    if (instructions[i] === "L") {
      x--;
    }

    if (instructions[i] === "R") {
      x++;
    }

    if (instructions[i] === "U") {
      y++;
    }

    if (instructions[i] === "D") {
      y--;
    }
  }

  if (Math.abs(x) > bound || Math.abs(y) > bound) return [-1, 1];

  return [x, y]
}



console.log(robotPath("LLLLDDDDUR", 2));
