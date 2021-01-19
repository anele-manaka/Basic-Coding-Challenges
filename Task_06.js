function maximum (a, b, c) {
    maximum = 0;

  if (a > b) { 
    maximum = a;

  } else {
    maximum = b;
  }

  if (c > maximum) {
    maximum = c;
  }
  
  return maximum;
}

console.log(maximum(11211,12111,11121));
