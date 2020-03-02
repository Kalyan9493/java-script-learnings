
// repeat string based on n number of times.

function repeatString(str,n){

    var finalString = "";

    if(n <= 0){
        return str;
    }

    for(let i=0;i<n;i++){
        finalString+= str;
    }

    console.log(finalString);
}

repeatString("kalyan",5);