const { mountClickAndEnterHandler, throttled, reportError } = require("./lib");

module.exports = {
  prepareProjectModals: function prepareProjectModals(modal) {
    try{
    let smallProjectCovers = document.getElementsByClassName("project-pointer");

    function showModal(ev) {
      modal.innerHTML = ev.target.parentNode.innerHTML;
      modal.removeChild(modal.getElementsByClassName("project__name pointer")[0]);
      modal.removeChild(modal.getElementsByClassName("project__left-cover")[0]);
      modal.removeChild(modal.getElementsByClassName("project__right-cover")[0]);
      modal.getElementsByClassName("initial")[0].classList.toggle("initial");

      let deleteButtonPattern = document.getElementById('delete_icon').content.querySelector("div");
      let deleteButtonPatternContent = document.importNode(deleteButtonPattern, true);
      deleteButtonPatternContent.addEventListener("click", hide_modal);

      function hide_modal() {

        deleteButtonPatternContent.removeEventListener("click", hide_modal);
        modal.innerHTML = "";
        location.hash = "";
        location.hash = "projects";
        window.scrollBy(0, -document.getElementById("intro").clientHeight);

      }
     
      modal.appendChild(deleteButtonPatternContent);
      modal.classList.add("large");
      modal.getElementsByClassName("project__image")[0].classList.add("large");
      modal.style.display = "block";

      location.hash = "large-project-content";
      window.scrollBy(0, -document.getElementById("intro").clientHeight);
    }
    Array.prototype.forEach.call(smallProjectCovers, (cover) => mountClickAndEnterHandler(cover, throttled(showModal, 300)));
  }
  catch(err){reportError(err)}
  },
};
