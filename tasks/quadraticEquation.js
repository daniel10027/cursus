function quadraticEquation(a, b, c) {

  var discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return [];
  }
  if (discriminant === 0) {
    return [-b / (2 * a)];
  }
  var roots = [];
  roots.push((-b - Math.sqrt(discriminant)) / (2 * a));
  roots.push((-b + Math.sqrt(discriminant)) / (2 * a));
  if (roots[0] > roots[1]) {
    var tmp = roots[1];
    roots[1] = roots[0];
    roots[0] = tmp;
  }
  return roots;
}
