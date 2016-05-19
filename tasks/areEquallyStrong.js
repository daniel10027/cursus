function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  if(yourLeft === friendsLeft && yourRight === friendsRight || yourLeft ===
    friendsRight && friendsLeft === yourRight) {
    return true;
  }
  return false;
}
