const { mountClickAndEnterHandler, throttled } = require("./lib");

module.exports = {
  prepareHamburgerMenu: function prepareHamburgerMenu(target, menu, uiAside) {
    if (target && menu && uiAside){
    toggleMenuVisibility = function () {
      menu.classList.toggle("active");
      uiAside.classList.toggle("filled");
    };
    //toggleMenuVisibility = typeof throttle !== "undefined" ? throttle(toggleMenuVisibility, 300) : toggleMenuVisibility;
    
    // target.addEventListener("click", toggleMenuVisibility);
    // target.addEventListener("keyup", function (event) {
    //   if (event.keyCode === 13) {
    //     event.preventDefault();
    //     toggleMenuVisibility();
    //   }
    // });
  mountClickAndEnterHandler(target, throttled(toggleMenuVisibility, 300));
  }else{console.log('can not open hamburger menu - missing or falsey arguments')}
  },
};

//s