var  first = [1,2,3];
var second = [4,5,6];

function add(a,b,c){
    return a+b+c;
}


console.log(add(...first));

console.log(add(...second));