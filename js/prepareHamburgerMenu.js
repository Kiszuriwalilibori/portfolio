module.exports = {
  prepareHamburgerMenu: function prepareHamburgerMenu(target, menu, uiAside) {
    toggleMenuVisibility = function () {
      menu.classList.toggle("active");
      uiAside.classList.toggle("filled");
    };
    toggleMenuVisibility = typeof throttle !== "undefined" ? throttle(toggleMenuVisibility, 300) : toggleMenuVisibility;
    
    target.addEventListener("click", toggleMenuVisibility);
    target.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        toggleMenuVisibility();
      }
    });
  },
};