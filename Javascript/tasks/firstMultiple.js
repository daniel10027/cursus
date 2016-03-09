function firstMultiple(divisors, start) {
    for(var i=start;;i++){
        var found = true;
        for(var j=0;j<divisors.length;j++){

            if(i%divisors[j]) found = false;
        }
        if(found){
            return i;
        }
    }
}
