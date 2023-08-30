//1. Calculate the sum of the first and the last values from this array :
//[5, 6, 2, 9, 12, 4]

// const array = [5,6,2 ,9,12,4];
// const firstValue = array[0];
// const lastIndex = array.length - 1;
// console.log(firstValue);
// console.log(lastIndex);
// const sum = firstValue + array[lastIndex];
// console.log(sum);

// 2. In the following array , [5, 6, 2, 9, 12, 4], set the third value to be the multiply of the
// first 2 values ( 2 will become 11 )

// const array = [5,6,2 ,9,12,4];
// array[2] = array[0]+ array[1];
// console.log(array[2]);

// 3. Create an array of numbers and print their sum

// let res = 0;
// const array = [5,6,2 ,9,12,4];
// for (let i = 0; i < array.length; i++) {
//    res +=array[i];
// }
//    console.log(res);

// 4. Create an arrays of strings, and print the strings that their length is bigger than 4.

// const array = ['tal', 'avi', 'shani', 'abuhazara', 'emesholki', 'savta']
// for (let i = 0; i < array.length; i++) {if (array[i].length > 4) {console.log(array[i])}
// else console.log('no strings bigger than 4')}

// 5. Create an array of Booleans. Print the number of “True” values.

//  const array = [true, false, true, false, true, false, true, false, true, false, true];
//  for (let i = 0; i < array.length; i++) { if (array[i] === true) {console.log(array[i])}}

// 6. There is an array : [ [1, 6, 7] , [8, 3] , [ 2, 9, 5, 4 ] ]
//a
const array = [
  [1, 6, 7],
  [8, 3],
  [2, 9, 5, 4],
];
// for (let i = 0; i < array.length; i++) {for (let j = 0; j < array[i].length; j++) {console.log(array[i][j])}}
//b
// for (let i = 0;  i < array.length ; i++) {
//     console.log(`the length of the inner array at index ${i}: ${array[i].length}`);
// }
//c  Print all the numbers that between 4 and 8

// for(let i = 0; i < array.length; i++)
// {
// for(let j = 0; j < array[i].length; j++){
// const number=array[i][j];
// if(number >= 4 && number <= 8)
// {
//     console.log(number);
// }
// }}

//d. Print that total of all the numbers
let number = 0;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    number += array[i][j];
  }
}
console.log(number);
