const { mountClickAndEnterHandler, throttled, reportError } = require("./lib");

module.exports = {
  prepareProjectModals: function prepareProjectModals(modal) {
    try{
    let smallProjectCovers = document.getElementsByClassName("project-pointer");

    function showModal(ev) {
      modal.innerHTML = ev.target.parentNode.innerHTML;
      modal.removeChild(modal.getElementsByClassName("project__name pointer")[0]);
      modal.removeChild(modal.getElementsByClassName("left-cover")[0]);
      modal.removeChild(modal.getElementsByClassName("right-cover")[0]);
      modal.getElementsByClassName("initial")[0].classList.toggle("initial");

      const deleteIconSvgContent =
        '<svg id = "projectModal-deleteIcon" height="65px" viewBox="0 0 365.71733 365" width="65px" xmlns="http://www.w3.org/2000/svg"><g fill="#f44336"><path d="m356.339844 296.347656-286.613282-286.613281c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503906-12.5 32.769532 0 45.25l286.613281 286.613282c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082032c12.523438-12.480468 12.523438-32.75.019532-45.25zm0 0"/><path d="m295.988281 9.734375-286.613281 286.613281c-12.5 12.5-12.5 32.769532 0 45.25l15.082031 15.082032c12.503907 12.5 32.769531 12.5 45.25 0l286.632813-286.59375c12.503906-12.5 12.503906-32.765626 0-45.246094l-15.082032-15.082032c-12.5-12.523437-32.765624-12.523437-45.269531-.023437zm0 0"/></g></svg>';
      const delete_button = document.createElement("div");
      delete_button.classList.add("project-icon-delete");
      delete_button.innerHTML = deleteIconSvgContent; //
      delete_button.tabIndex = 0;

      function hide_modal() {
        projectModalDeleteIcon.removeEventListener("click", hide_modal);
        modal.innerHTML = "";
      }
      modal.appendChild(delete_button);
      const projectModalDeleteIcon = document.getElementById("projectModal-deleteIcon"); 
      projectModalDeleteIcon.addEventListener("click", hide_modal);
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
