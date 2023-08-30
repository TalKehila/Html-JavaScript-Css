document.getElementById("myButton").onclick = function() 
{
const MyCheckBox = document.getElementById("MyCheckBox");
const visaBtn= document.getElementById("visaBtn");
const master = document.getElementById("master");
const paypal= document.getElementById("paypal");

if(document.getElementById("MyCheckBox").checked) {
console.log("youre subcribed!")
}
else 
{
console.log("not subcribed!")
}
if(visaBtn.checked)
 {console.log("Visa");}

  else if(master.checked) {console.log("Master");}

  else{console.log("Paypal");}
 
}

