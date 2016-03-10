function splitAddress(address) {

    var result = address.split("://")
    var protocol = result[0];
    result = result[1].split(".com");
    var domain = result[0];
    result = result[1].split("/");


    if(result[1]){
        return [protocol,domain,result[1]]
    }

    return [protocol,domain]
}
