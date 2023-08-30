let area;
let width;
let height;

width = window.prompt("Enter the width");
height = window.prompt("Enter the height");

area = getarea(width, height);
console.log("the area is: " + area);

function getarea(width, height) {
    let res = width * height;
    return res;
}