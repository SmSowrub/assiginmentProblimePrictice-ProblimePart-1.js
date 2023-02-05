function publicBusFare(participants){
    let capaciticeBus = 50 ;
    let capaciticeMicrobus = 11;
    if( typeof participants != "number" || participants < 50){
        return "Provide valid participants...";
    }

    let extra = 0;
     extra = participants % capaciticeBus;
     extra = extra % capaciticeMicrobus;
     let localBus = extra * 250;
     return localBus;
}


console.log(publicBusFare(117));