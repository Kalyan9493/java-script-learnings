// finding the longest word in the string

let longestWord = "";
function longWord(str)
{
    let words=str.split(" ");
    for(i=0;i<words.length;i++)
    {
        if(longestWord.length < words[i].length)
        {
            longestWord = words[i];
        }
    }
    console.log("Longest word is : "+longestWord+" ,with length : "+longestWord.length);
}

longWord("time is very precious");