function areaOfTriangle(sideA, sideB, sideC) {
    let semiperimeter = (1 / 2) * (sideA + sideB + sideC);
    let area = Math.sqrt(semiperimeter * (semiperimeter - sideA) * (semiperimeter - sideB) * (semiperimeter - sideC));
    return area + ' units squared';
  }

  console.log(areaOfTriangle(4, 9, 12))