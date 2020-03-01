var cat={
    sound : "Meow",
    speak : function(){
        console.log("Meow");
    }
};
cat.speak();  // normal call using function

var speakFunction = cat.speak;

let speakFunctionBind = speakFunction.bind();  // using bind method

speakFunctionBind();