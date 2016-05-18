function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
  var ans = [];
  for (var i = 0; i < cost_per_mile.length; i++) {
    var tmp = cost_per_minute[i] * ride_time + cost_per_mile[i] * ride_distance;
    ans.push(tmp);
  }
  return ans;
}