function whoseMove(lastPlayer, win) {
  if (win) return lastPlayer;
  switch (lastPlayer) {
    case "white":
      return "black";
    case "black":
      return "white";
  }
}
