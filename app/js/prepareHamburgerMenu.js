const { mountClickAndEnterHandler, throttled, reportError } = require("./lib");

module.exports = {
  prepareHamburgerMenu: function prepareHamburgerMenu(target, menu, uiAside) {
    try {
      if (!(target && menu && uiAside)) {
        throw new Error("can not open hamburger menu - missing or falsey arguments");
      }
      toggleMenuVisibility = function () {
        menu.classList.toggle("active");
        uiAside.classList.toggle("filled");
      };
      mountClickAndEnterHandler(target, throttled(toggleMenuVisibility, 300));
    } catch (err) {reportError(err)}

  },
};
