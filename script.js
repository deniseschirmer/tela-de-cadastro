let nameCli = document.querySelector("#name");
let petName = document.querySelector("#petName");
let email = document.querySelector("#email");
let number = document.querySelector("#number");
let race = document.querySelector("#race");
let species = document.querySelector("#species");

let listener = document.querySelectorAll(".listener");

listener.forEach((v) => {
  v.addEventListener("keyup", () => {
    if (v.value.length <= 2) {
      v.setAttribute("style", "color:red");
    } else {
      v.setAttribute("style", "color:green");
    }
  });
});

function cadastrar() {
  if (
    nameCli.value.length > 0 &&
    petName.value.length > 0 &&
    email.value.length > 0 &&
    number.value.length > 0 &&
    race.value.length > 0 &&
    species.value.length > 0
  ) {
    alert("funcionou");
  } else {
    alert("Preencha todos os campos");
  }
}
