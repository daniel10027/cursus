function clockDigitsCount(startTime, finishTime) {

   var occurences = [],
       start = startTime[0] * 60 * 60 + startTime[1] * 60 + startTime[2],
       finish = finishTime[0] * 60 * 60 + finishTime[1] * 60 + finishTime[2];

     for (var i = 0; i < 10; i++) {
     occurences.push(0);
   }

   for (var current = start; current <= finish; current++) {
     var values = [current % 60,
                   Math.floor(current / 60) % 60,
                   Math.floor(current / (60 * 60))];
     for (var i = 0; i < values.length; i++) {
       occurences[values[i] % 10]++;
       occurences[Math.floor(values[i] / 10)]++;
     }
   }


   return occurences;
}
