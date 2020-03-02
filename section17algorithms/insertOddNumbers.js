
// Insert Only Odd numbers in an Array.
var array=[];
function oddNumbers(arr){

    for(var i=0;i<arr.length;i++){
        if(arr[i] % 2 !== 0){
            array.push(arr[i]);
        }
    }
}

oddNumbers([1,12,5,6,8,9,3,0]);
console.log(array);