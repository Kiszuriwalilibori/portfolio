module.exports = {
  trans: function trans() {

document.getElementById("heading").addEventListener("animationend", myEndFunction);

function myEndFunction() {
  
  const invisibles = document.querySelectorAll("#informations, #skills, #projects, footer");
  
  invisibles.forEach(element => element.style.visibility ="visible");
      
  }
  }
}