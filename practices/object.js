// object creation using constructors.

function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log("Draw");
    }
}

const circle=new Circle(1);
console.log(circle.radius);
console.log(circle.draw());
