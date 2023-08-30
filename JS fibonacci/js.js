


function fibo(value) {
    if (value <0)return 0;
    if (value == 1)return 1;
    // if (value == 2) return 1;
    return fibo(value - 2) + fibo(value - 1);
}
console.log(fibo(8))






function fiboarr(value){
   const fibo= [0,1];
   for(let i =2 ; i<=value ;i++)
   {
       fibo.push(fibo[i-2] + fibo [i-1])
   }
 return fibo;
}
console.log(fiboarr(100))







function fibovaribles(num) {
  let first = 0,
    second = 1;
  for (let i = 0; i < num; i++) {
    second = first + second;
    first = second - first;
  }
  return second;
}
console.log(fibovaribles(11));






function print ( value){
    console.log(value)
}
print("hello")

function rec1 (value)
{
    if (value===0) //value is zero and number
    return 1 ;
    return rec1 (value-1)+2
}
 console.log(rec1(8))
