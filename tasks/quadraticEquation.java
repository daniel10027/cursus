ArrayList<Double> quadraticEquation(int a, int b, int c) {

  int discriminant =  b*b - 4 * a * c;
  if (discriminant < 0) {
    ArrayList<Double> empty = new ArrayList<>();
    return empty;
  }
  if (discriminant == 0) {
    ArrayList<Double> answer = new ArrayList<>();
    answer.add(-b / (2.0 * a));
    return answer;
  }
  ArrayList<Double> roots = new ArrayList<>();
  roots.add((-b - Math.sqrt(discriminant) ) / (2.0 * a));
  roots.add((-b + Math.sqrt(discriminant) ) / (2.0 * a));
  if (roots.get(0) > roots.get(1)) {
    double tmp = roots.get(1);
    roots.set(1, roots.get(0));
    roots.set(0, tmp);
  }
  return roots;
}
