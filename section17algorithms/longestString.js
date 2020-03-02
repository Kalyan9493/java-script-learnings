// Find the Longest Word in a string.

var longestWord="";

function longWord(str){
    strarr= str.split(" ");

    for(let i=0;i<strarr.length;i++){
        if(strarr[i].length > longestWord.length){
            longestWord = strarr[i];
        }
    }

    console.log(longestWord);
}

longWord(" try and try untill you reach your goal ");

longWord("find the longest word in this string");