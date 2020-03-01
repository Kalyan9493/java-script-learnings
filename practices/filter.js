var marks=[50,40,45,60,80,90];

var passMarks=function(test){
    return test>60;
}

var graduation= marks.filter(passMarks);

console.log(graduation);