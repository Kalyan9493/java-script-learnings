// finding unique string with less time complexity.

function uniqueString(str){

    strarr= str.split("").sort();
    for(let i=0;i<strarr.length;i++){
        if(strarr[i] ===  strarr[i+1]){
            return false;
        }
    }
    return true;
}

console.log(uniqueString("kalyan"));
