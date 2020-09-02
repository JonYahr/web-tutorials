//this is a comment
//you do not need the word var when assigning a variable, because it is implied.

var car = {
    make: "honda", 
    model: "accord", 
    color: "white", 
    wheels: 4,

    drive: function(expression) {
        console.log("vroom vroom " + expression);
    },

    wheelcheck: function() {
        console.log("this car has " + this.wheels + " wheels");
    }

};

car.drive("wee");
car.wheelcheck();

// console.log("This car has " + car.wheels + " wheels.");
document.getElementById("result").innerHTML = JSON.stringify(car);

var vehicles = ["airplane", "bike", "truck"];
console.log(vehicles[0]);

//conditionals
if(car.wheels == 4) {
    console.log("congrats, you are a real car.");
}

if(car.wheels <= 4) {
    console.log("bro, what are you?");
}

if(car.wheels != 2) {
    console.log("you are not a motorcycle");
}

//loops
for(var i = 0; i < 10; i++) {
    console.log("I am the message in the for loop." + i);
    //when I get here, add 1 to i
    //stop when I get to 9
}

var j = 0;

while(j < 10) {
    console.log("Inside the while loop: " + j);
    j++;
}

// var x = 5;
// var y = 3;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
