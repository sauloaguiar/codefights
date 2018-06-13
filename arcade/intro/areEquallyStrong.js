function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  return (yourLeft == friendsLeft && yourRight == friendsRight) ||
          (yourRight == friendsLeft && yourLeft == friendsRight);
}
