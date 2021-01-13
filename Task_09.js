function vowels(string){
    var strVowels = '';
    for(var i = 0; i < string.length; i++){
        if (string[i] == 'a' || 
            string[i] == 'A' || 

            string[i] == 'e' || 
            string[i] == 'E' || 

            string[i] == 'i' || 
            string[i] == 'I' || 

            string[i] == 'o' || 
            string[i] == 'O' || 

            string[i] == 'u' || 
            string[i] == 'U') {
            strVowels += string[i];
        }
    }
    return strVowels;
}
console.log(vowels('yOu ReMiNd Me Of My FaVoUrItE pErFuMe!'));
console.log(vowels('lOoK mOrTy! iM jAVaScRiPt RICK!!! JS RICK!'));
console.log(vowels('The vowels are as follows: a, e, i, o, u and sometimes y.'))