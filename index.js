
/* Codigo js Login page */
/* var loginLink = document.querySelector(".login-link");
var wrapper = document.querySelector(".wrapper");
var registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
*/


var wrapper = document.querySelector(".wrapper");

document.getElementById("BotonContacto").addEventListener("click", body2)

document.getElementById("icon-close").addEventListener("click", body4);

var body = document.getElementById("Difuminado");


function body2 (){
  body.classList.add("Difuminado");
}

function body4 (){
  body.classList.remove("Difuminado");
}

document
  .getElementById("BotonFlecha")
  .addEventListener("click", menuDesplegable);

function menuDesplegable() {
  var menu = document.getElementById("mapa");

  if (menu.className == "mapaCerrado") {
    menu.classList.add("mapaAbierto")
  } else {
    menu.classList.remove("mapaAbierto")
  }
}
