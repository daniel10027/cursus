function firstNotDivisible(divisors, start) {

    for(var i=start;;i++){
        var found = true;

        for(var j=0;j<divisors.length;j++){
            if(i%divisors[j]===0) {
                found = false;
                break;
            }

        }

        if(found){
            return i;
        }
    }
}
