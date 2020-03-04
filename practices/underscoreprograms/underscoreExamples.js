var _ = require('underscore');

// _.each method
console.log("_.each method");
var arr;
console.log(_.each([10,20,30],function(arr){
    console.log(arr);
}));

// _.map method

console.log("_.map Method")
console.log(_.map([10,20,30,40,50,60],function(map){
    return map*3;
}));

// _.reduce Method

console.log(" _.reduce Method");

console.log(_.reduce([2,4,6,8,1],function(start,end){
    return start+end;
}));