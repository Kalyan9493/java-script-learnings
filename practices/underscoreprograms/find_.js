// find a numbers that divisible by 3.
var _=require('underscore');
var arr=[10,12,15,30,15,23,25];

console.log(_.find(arr,function(num){
    return num%3 == 0;
}))

console.log(_.filter(arr,function(num){
    return num%3 == 0;
}))
