function josephusProblem(n, k) {
  var removed = [],
    currentPerson = 0;
  for (var i = 0; i < n; i++) {
    removed.push(false);
  }
  for (var i = 1; i < n; i++) {
    var skipped = 0;
    while (skipped <= k - 1) {
      if (!removed[currentPerson]) {
        skipped++;
      }
      currentPerson = (currentPerson + 1) % n;
    }
    while (removed[currentPerson]) {
      currentPerson = (currentPerson + 1) % n;
    }
    removed[currentPerson] = true;
  }
  for (var i = 0; i < n; i++) {
    if (!removed[i]) {
      return i + 1;
    }
  }
}