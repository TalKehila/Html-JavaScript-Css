{
  const body = document.querySelector("body");
  
  const name = document.querySelector(".myForm input[type=text]");
  const age = document.querySelector(".myForm input[type=number]");
  const btn = document.querySelector(".btn");
 

  btn.addEventListener("click", onClick);

  function onClick() {
    const t = email.value + " Check Your Email ";
    // const text = `${email.value} - ${age.value}`
    console.log(email.value);

    //     const json = JSON.stringify({ text }, null, 2)
    //     root.setHTML(json)
  }
}

//change photos 
const changephotos = document.getElementById("changephotos");

changephotos.addEventListener('mouseover', function() {
  changeBackground(changephotos, 'url("./images/water.png")');
});

changephotos.addEventListener('mouseout', function() {
  changeBackground(changephotos, 'url("./images/wall.jpeg")');
});

function changeBackground(element, backgroundImage) {
  element.style.backgroundImage = backgroundImage;
}
// end change




const openDialog = document.querySelector("[open-dialog]");
const closeDialog = document.querySelector("[close-dialog]");
const dialog = document.querySelector("dialog");

console.log(dialog, closeDialog, openDialog);

openDialog.addEventListener("click", function () {
  //   dialog.show();
  dialog.showModal();
});
closeDialog.addEventListener("click", function () {
  dialog.close();
});
