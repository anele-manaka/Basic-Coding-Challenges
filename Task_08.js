function convertNumbersToTime(num) {

    var hours = Math.floor(num / 60);
    var minutes = num%60;

        return hours + " hour(s) and " + minutes + " minute(s)"
    }
    
    
    console.log(convertNumbersToTime(457));
    console.log(convertNumbersToTime(71));
    console.log(convertNumbersToTime(133));