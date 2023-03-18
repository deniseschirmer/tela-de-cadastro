let name = document.querySelector("#name");
let labelName = document.querySelector("#labelName");

let petName = document.querySelector("#petName");
let labelPetName = document.querySelector("#labelPetName");

let email = document.querySelector("#email");
let labelEmail = document.querySelector("#labelEmail");

let number = document.querySelector("#number");
let labelNumber = document.querySelector("#labelNumber");

let race = document.querySelector("#race");
let labelRace = document.querySelector("#labelRace");

let species = document.querySelector("#species");
let labelSpecies = document.querySelector("#labelSpecies");

petName.addEventListener("keyup", () => {
  if (petName.value.length <= 2) {
    labelName.setAttribute("style", "color:red");
  } else {
  }
});
