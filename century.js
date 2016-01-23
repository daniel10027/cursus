function centuryFromYear(year) {

    var cent = Math.floor(year/100);

    if(year%cent==0) return cent;
    return cent+1;
}


console.log(centuryFromYear(1700));
