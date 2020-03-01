var numbers=[10,20,30,40,50];

var addnumbers=numbers.reduce(function(a,b){
    return a+b;
});
console.log("Sum Of Array is  :"+addnumbers);

var productnumbers=numbers.reduce(function(a,b){

    return a*b;
});
console.log("Product Of Array Is : "+productnumbers);