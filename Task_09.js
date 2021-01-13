function vowels(str){
    var strVowels = '';
    for(var i = 0; i < str.length; i++){
        if (str[i] == 'a' || 
            str[i] == 'A' || 

            str[i] == 'e' || 
            str[i] == 'E' || 

            str[i] == 'i' || 
            str[i] == 'I' || 

            str[i] == 'o' || 
            str[i] == 'O' || 

            str[i] == 'u' || 
            str[i] == 'U') {
            strVowels += str[i];
        }
    }
    return strVowels;
}
console.log(vowels('yOu ReMiNd Me Of My FaVoUrItE pErFuMe!'));
console.log(vowels('lOoK mOrTy! iM jAVaScRiPt RICK!!! JS RICK!'));
console.log(vowels('The vowels are as follows: a, e, i, o, u and sometimes y.'))