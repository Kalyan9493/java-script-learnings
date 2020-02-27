var randomBodyParts=["head","hands","legs","heart","liver"];
var randomAdjectives=["smelly","boring","lazy","waste"];
var randomWords=["dog","pig","masquito","lion"];

var randomAdjective=randomAdjectives[Math.floor(Math.random()*4)];
var randomBodyPart=randomBodyParts[Math.floor(Math.random()*3)];
var randomWord=randomWords[Math.floor(Math.random()*3)];

console.log("your  "+randomBodyPart+" is like "+randomAdjective+" "+randomWord);