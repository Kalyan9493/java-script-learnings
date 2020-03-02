// check the given string is palondroe or not.


function palindrome(str){
    var strWithoutSpecialCharacters = str.replace(/\W/g," ");
    var revstr=strWithoutSpecialCharacters.split("").reverse().join("");

    if(str === revstr){
        return "Plindrome";
    }
    return "Not Palindrome";
}

console.log(palindrome("omninmo"));
console.log(palindrome("kalyan"));