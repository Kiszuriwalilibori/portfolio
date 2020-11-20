const { mountClickAndEnterHandler, throttled, reportError } = require("./lib");

//const { toggleClassMenuMobile } = require("./mobilemenu");

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

// const { mountClickAndEnterHandler, throttled, reportError } = require("./lib");

// module.exports = {
//   prepareHamburgerMenu: function prepareHamburgerMenu(target, menu) {
//     try {
//       if (!(target && menu)) {
        
//         throw new Error("can not open hamburger menu - missing or falsey arguments");
//       }
//       // toggleMenuVisibility = function () {
//       //   menu.classList.toggle("active");
//       //   uiAside.classList.toggle("filled");
//       // };
//       console.log('target', target);
//       console.log('menu', menu);

//       toggleClassMenuMobile = function () {
//         menu.classList.add("mobile-menu--animatable");	
//         if(!menu.classList.contains("mobile-menu--visible")) {		
//           menu.classList.add("mobile-menu--visible");
//         } else {
//           menu.classList.remove('mobile-menu--visible');		
//         }	
//       },

//       OnTransitionEndMenuMobile =function () {
//         menu.classList.remove("mobile-menu--animatable");
//       }

//       console.log('building hamburger');
//       menu.addEventListener("transitionend", OnTransitionEnd, false);
//       mountClickAndEnterHandler(target, throttled(toggleClassMenuMobile, 300));

//     } catch (err) {console.log(err)}

//   },
// };
