function holiday(x, weekDay, month, yearNumber) {
    var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var daysInWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
        "Saturday", "Sunday"
    ];
    var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var weekDay = daysInWeek.indexOf(weekDay);
    var month = months.indexOf(month);
    var isLeap = function(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    };
    var countLeap = function(yearLeft, yearRight) {
        var result = 0;
        for (var i = yearLeft; i <= yearRight; i++) {
            if (isLeap(i)) {
                result++;
            }
        }
        return result;
    };
    var getDaysInMonth = function(month, year) {
        var result = days[month];
        if (isLeap(year) && month === 1) {
            result++;
        }
        return result;
    };
    /* 01 January 2015 is Thursday */
    var leaps = countLeap(2015, yearNumber - 1);
    var newWeekDay = (daysInWeek.indexOf("Thursday") + leaps * 366 + (
        yearNumber - 2015 - leaps) * 365) % 7;
    for (var i = 0; i < month; i++) {
        newWeekDay = (newWeekDay + getDaysInMonth(i, yearNumber)) % 7;
    }
    var daysCount = 0;
    var daysInMonth = getDaysInMonth(month, yearNumber);
    for (var i = 1; i <= daysInMonth; i++) {
        if (newWeekDay === weekDay) {
            daysCount++;
        }
        if (daysCount === x) {
            return i;
        }
        newWeekDay = (newWeekDay + 1) % 7;
    }
    return -1;
}