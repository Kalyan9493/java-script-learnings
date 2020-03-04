var _ = require('underscore');

// finding the Odd nummber from list using _.reject().

var numbers=[1,2,3,4,6,7,8,9];

console.log(_.reject(numbers,function(number){
    return number % 2 == 0;
}))