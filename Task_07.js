function convertCelsiusToFarenheit (celsius) {
    var farenheit;

    farenheit = celsius * 9/5 + 32;

    return farenheit;
}

console.log(convertCelsiusToFarenheit (36.5));
console.log(convertCelsiusToFarenheit (-10));




function convertFarenheitToCelsius (farenheit) {
    var celsius;

    celsius = (farenheit - 32) * 5/9;

    return celsius;
}

console.log(convertFarenheitToCelsius (68));
console.log(convertFarenheitToCelsius (115));