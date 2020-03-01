// Finding permutation of two Strings 

function permutation(str1,str2)
{
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

if(permutation("kalyan","naylak")){
    console.log("Both Are Same");
}
else{
    console.log("Both Are Not Same");
}