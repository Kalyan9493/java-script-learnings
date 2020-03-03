var longestWord;
function longWord(str)
{
    let words=str.split(" ");
    for(i=0;i<words.length;i++)
    {
        if(words[i] > words[i+1])
        {
            longestWord = words[i];
        }
        else
        {
            longestWord=words[i];
        }
    }
}
console.log("Longest word is : "+longestWord);

longWord("the longest word in this line");