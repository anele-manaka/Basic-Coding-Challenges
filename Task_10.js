function commonCharacters(str1, str2) {

  let strArr = str2.split("");
  let commonArray = [];
  strArr.forEach((character) => {

    if (str1.includes(character)) {
        commonArray.push(character);
    }
    });

  let commonString = commonArray.join(",");
  return "The common characters among these two strings are: " + commonString;
}

console.log(commonCharacters("Hi, my name is Anele Manaka", "My favorite color is black"))