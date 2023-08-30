//const = a varible that cant be changed

const pi = 3.14159;// if its const and not let we cant change it 
let radius;
let circumference;

radius = window.prompt("Enter the radius of the circle");
radius = Number(radius);



circumference = 2 * pi * radius;
console.log("the circumference of the circle is " + circumference);

