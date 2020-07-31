module.exports = {
  prepareProjectModals: function prepareProjectModals(modal) {
    let smallProjectCovers = document.getElementsByClassName("project-pointer");

    function showModal(ev) {
      
      modal.innerHTML = ev.target.parentNode.innerHTML;
      
      modal.removeChild(modal.getElementsByClassName("project__name pointer")[0]);
      modal.removeChild(modal.getElementsByClassName("left-cover")[0]);
      modal.removeChild(modal.getElementsByClassName('right-cover')[0]);
      modal.getElementsByClassName("initial")[0].classList.toggle("initial");

      const delete_button = document.createElement("div");
      delete_button.classList.add("icon-delete");
      delete_button.tabIndex = 0;
      delete_button.addEventListener("click", hide_modal);

      function hide_modal() {
        delete_button.removeEventListener("click", hide_modal);
        modal.innerHTML = "";
      }
      modal.appendChild(delete_button);
      modal.classList.add("large");
      modal.getElementsByClassName("project__image")[0].classList.add("large");
      modal.style.display = "block";

      location.hash = "projects";
      window.scrollBy(0, -document.getElementById("intro").clientHeight);
    }
    showModal = typeof throttle !== "undefined" ? throttle(showModal, 500) : showModal;
    Array.prototype.forEach.call(smallProjectCovers, (cover) => {
      cover.addEventListener("click", showModal);
      cover.addEventListener("keyup", function(event){if(event.keyCode===13){showModal(event)};});
    });
  },
};
