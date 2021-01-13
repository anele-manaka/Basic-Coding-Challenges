var length1 = 4; 
var length2 = 9; 
var length3 = 12; 
var semiperimeter = (length1 + length2 + length3)/2;
var area =  Math.sqrt(semiperimeter*((semiperimeter-length1)*(semiperimeter-length2)*(semiperimeter-length3)));
console.log(area);