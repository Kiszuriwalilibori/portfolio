module.exports = {
  prepareProjectModals: function prepareProjectModals(modal) {
    let smallProjectCovers = document.getElementsByClassName("project-pointer");

    function show_modal(ev) {
      modal.innerHTML = ev.target.parentNode.innerHTML;
      modal.removeChild(
        modal.getElementsByClassName("project__name pointer")[0]
      );
      modal.getElementsByClassName("initial")[0].classList.toggle("initial");

      const delete_button = document.createElement("div");
      delete_button.classList.add("icon-delete");
      delete_button.addEventListener("click", hide_modal);

      function hide_modal() {
        delete_button.removeEventListener("click", hide_modal);
        modal.innerHTML = "";
      }
      modal.appendChild(delete_button);
      modal.classList.add("large");
      modal.getElementsByClassName("project__image")[0].classList.add("large");
      modal.style.display = "block";

      // scrolls window to assure proper location of modal
      location.hash = "projects";
      window.scrollBy(0, -document.getElementById("intro").clientHeight);
    }

    //mounts handlers on small project covers
    Array.prototype.forEach.call(smallProjectCovers, (cover) => {
      cover.addEventListener("click", show_modal);
    });
  },
};
