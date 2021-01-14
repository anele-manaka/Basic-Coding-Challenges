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

    else if(minutes > 1){
        return minutes + " minutes"
    }
    else if(minutes === 1){
        return minutes + " minute"
    }
    else if(hours > 1){
        return hours + " hours"
    }
    else if(hours === 1){
        return hours + " hour"
    }
}
    
    console.log(convertNumbersToTime(457));
    console.log(convertNumbersToTime(71));
    console.log(convertNumbersToTime(133));
    console.log(convertNumbersToTime(121));
    console.log(convertNumbersToTime(60));
    console.log(convertNumbersToTime(21));
    console.log(convertNumbersToTime(1));