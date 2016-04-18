function splitByValue(k, elements) {
var arr=[];

    for(var i=0;i<elements.length;i++){
        if(elements[i]<k) arr.push(elements[i]);
    }

    for(var i=0;i<elements.length;i++){
        if(elements[i]>=k) arr.push(elements[i]);
    }

    return arr;
}
