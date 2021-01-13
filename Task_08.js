function convertNumbersToTime(num) {

    var hours = Math.floor(num / 60);
    var minutes = num%60;
    

    if ( hours > 1 && minutes > 1){
        return hours + " hours and " + minutes + " minutes"
    }
    else if(hours > 1 && minutes === 1){
        return hours + " hours and " + minutes + " minute"
    }
    else if(hours === 1 && minutes > 1){
        return hours + " hour and " + minutes + " minutes"
    }

    else if(hours === 1 && minutes > 1){
        return hours + " hour and " + minutes + " minutes"
    }
}
    
    console.log(convertNumbersToTime(457));
    console.log(convertNumbersToTime(71));
    console.log(convertNumbersToTime(133));
    console.log(convertNumbersToTime(121))