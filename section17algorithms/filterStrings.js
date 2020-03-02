// filter strings in an array of strings and numbers.

function strarray(arr){

   var arrayystr= arr.filter(function (a){
        return typeof a === "string";
    })
    return arrayystr;
}

console.log(strarray([10,"dvds",12,"sdfsd"]));