console.log(document.getElementById("intro"));
document.getElementById("intro").addEventListener("animationstart", myEndFunction);

function myEndFunction() {
  
  const invisibles = document.querySelectorAll("#informations, #skills, #projects, footer");
  
  invisibles.forEach(element => element.style.visibility ="visible");
      
  };

