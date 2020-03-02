// finding the longest string using regular expression.
var longestWord="";

function longWord(str){

    var stringWithoutSpecialCharacters = str.replace(/\W/g," ");
    let strarr= stringWithoutSpecialCharacters.split(" ");
    
    for(let i=0;i<strarr.length;i++)
    {
        if(strarr[i].length > longestWord.length){
            longestWord=strarr[i];
        }
    }
    console.log(longestWord);
}

longWord("this is the $$ Longest String");