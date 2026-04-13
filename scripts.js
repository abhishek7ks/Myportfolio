let darktheme = document.getElementById("theme");

darktheme.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

let form = document.getElementById("Contact");
let nameInput = document.getElementById("nameInput");
let emailinput = document.getElementById("emailinput");
let messageinput = document.getElementById("messageinput");

form.addEventListener("submit", function(e){
e.preventDefault();

if(nameInput.value.length === 0){
  alert("Please Enter Name")
} else if(!emailinput.value.includes("@")){
  alert("Write Valid Email")
} else if(messageinput.value.length === 0){
  alert("Write Message")
} else{
  alert("Form Submitted")
  form.reset();
}
})

