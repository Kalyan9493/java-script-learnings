// Insert odd numbers using filter method.

function oddNumber(arr){
    return arr.filter(function (a){
        return a%2 !== 0;
    })
}

console.log(oddNumber([10,20,51,28,37,63]));