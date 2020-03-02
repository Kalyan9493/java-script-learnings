
// Repeat String Using While Loop.

function repeatString(str, n){
    var finalString = "";
    
    if(n<=0){
        return str;        
    }

    let i=0;
    while(i<n){
        finalString+=str;
        i++;
    }
    console.log(finalString);
}

repeatString("kalyan",4);