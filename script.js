let name = document.querySelector("#name");
let labelName = document.querySelector("#labelName");
let validName = false;

let petName = document.querySelector("#petName");
let labelPetName = document.querySelector("#labelPetName");
let validPetName = false;

let email = document.querySelector("#email");
let labelEmail = document.querySelector("#labelEmail");
let validEmail = false;

let number = document.querySelector("#number");
let labelNumber = document.querySelector("#labelNumber");
let validNumber = false;

let race = document.querySelector("#race");
let labelRace = document.querySelector("#labelRace");
let validRace = false;

let species = document.querySelector("#species");
let labelSpecies = document.querySelector("#labelSpecies");
let validSpecies = false;

labelName.addEventListener("keyup", () => {
  if (labelName.value.length <= 2) {
    labelName.setAttribute("style", "color:red");
  } else {
    labelName.setAttribute("style", "color:green");
  }
});

function cadastrar() {
  if (validName || validPetName || validEmail || validNumber || validRace) {
  } else {
    alert("Esta tudo vazio");
  }
}
