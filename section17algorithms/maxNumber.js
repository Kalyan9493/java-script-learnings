// find  Maximum number in an array

function maxNumber(arr){
    var max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] < arr[i+1]){
            max=arr[i+1];
        }
    }
    return max;
}

console.log("Max Number is :"+maxNumber([10,20,30,40,5]));