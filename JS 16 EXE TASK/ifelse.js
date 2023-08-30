// shortcut for an id.else statement 
//1. a condition with ?
//2 expression if True :
 //3. expression if False :

//   let num =5 ;
//   num =5? console.log("the number is 5") : console.log("the number is not 5")
  let adult = check(23);
  console.log(adult);

  function check(age) {
      return age >= 18? true : false;
    }
  