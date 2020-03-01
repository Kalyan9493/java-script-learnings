// check weather the string is palindrome  or not.

function palindrome(str)
{
    return str == str.split("").reverse().join("");
}

if(palindrome("kalyan")){
    console.log("Palindrome");
}
else
{
    console.log("Not Palindrome");
}