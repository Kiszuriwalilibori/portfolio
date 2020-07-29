module.exports = {
  prepareHamburgerMenu: function prepareHamburgerMenu(target, menu) {
    toggleMenuVisibility = function () {
      menu.classList.toggle("active");
    };
    target.addEventListener("click", toggleMenuVisibility);
    target.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        toggleMenuVisibility();
      }
    });
  },
};
