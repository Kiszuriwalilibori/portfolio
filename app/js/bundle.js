(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { prepareEmailService } = require("./prepareEmailService.js");
const { prepareProjectModals } = require("./prepareProjectModals");
const { prepareResizeSensor } = require("./prepareResizeSensor");
const { prepareChangeLocation } = require("./prepareChangeLocation");
const { prepareHamburgerMenu } = require("./prepareHamburgerMenu");
const { prepareFooter }= require('./prepareFooter');
const { throttle } = require("./throttle");

window.onload = function () {
  const intro = document.getElementById("intro");
  const informations = document.getElementById("informations");
  const heading = document.getElementById("heading");
  const locationButtons = document.getElementsByClassName("location-button");
  const mailButtons = document.getElementsByClassName("mail-button");
  const emailModal = document.getElementById("emailModal");
  const projectModal = document.getElementById("large-project-content");
  const hamburgerMenu = document.getElementById("hamburger");
  const menu = document.getElementsByTagName("nav");
  const introUIAside = document.getElementById("intro-ui-aside");
  const body =document.getElementsByTagName('body')[0];
  const iconDeleteEmailModal = document.getElementById("emailModal-deleteIcon");

  if (!(informations && heading && intro && locationButtons && mailButtons && emailModal && hamburger && menu &&introUIAside && body && iconDeleteEmailModal)) {
    window.alert("Nie odnaleziono jednego lub więcej ważnych identyfikatorów. Strona nie będzie działać proawidłowo");
    return false;
  }
  
  prepareResizeSensor(informations, intro);
  prepareChangeLocation(locationButtons);
  prepareProjectModals(projectModal);
  prepareEmailService(mailButtons, emailModal, iconDeleteEmailModal);
  prepareHamburgerMenu(hamburgerMenu, menu[0], introUIAside);
  prepareFooter(body);
};

},{"./prepareChangeLocation":2,"./prepareEmailService.js":3,"./prepareFooter":4,"./prepareHamburgerMenu":5,"./prepareProjectModals":6,"./prepareResizeSensor":7,"./throttle":8}],2:[function(require,module,exports){
module.exports = {
  prepareChangeLocation: function prepareChangeLocation(buttons) {
    function change_location(ev) {
      if (ev.target.dataset.target) {
        location.hash = ev.target.dataset.target;
        window.scrollBy(0, -intro.clientHeight);
      } else console.log("event location has not valid dataset");
    }

    change_location = typeof throttle !== "undefined" ? throttle(change_location, 500) : change_location;

    Array.prototype.forEach.call(buttons, (button) => {
      button.addEventListener("click", change_location);
      button.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          change_location(event);
        }
      });
    });
  },
};

},{}],3:[function(require,module,exports){
module.exports = {
  prepareEmailService: function prepareEmailService(mountHooks, emailModal, iconDelete) {
    if (iconDelete) {
      iconDelete.addEventListener("click", toggleEmailModalVisibility);
    }

    function toggleEmailModalVisibility() {
      emailModal.classList.toggle("active");
    }

    toggleEmailModalVisibility = typeof throttle !== "undefined" ? throttle(toggleEmailModalVisibility, 300) : toggleEmailModalVisibility;

    function sendEmail() {
      emailModal.classList.toggle("active");
      let form = document.getElementById("contact-form");

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        const content = {
          name: name.value,
          email: email.value,
          message: message.value,
        };
        function resetInputFields() {
          name.value = "";
          message.value = "";
          email.value = "";
        }

        fetch("https://www.enformed.io/9kibv8hh/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(content),
        })
          .then((response) => response.json())
          .then((data) => handleResult(true))
          .catch((error) => handleResult(false));

        function handleResult(alert) {
          let result = {
            text: alert ? "Wysłano" : "Błąd połączenia",
            style: alert ? "successStyle" : "failureStyle",
          };

          setMessage();
          setTimeout(function () {
            removeMessage();
          }, 3000);

          function setMessage() {
            const el = document.createElement("div");
            el.id = "sentSuccess";
            el.innerText = result.text;
            el.classList.add(result.style);
            const parent = document.getElementById("status_message");
            parent.appendChild(el);
          }

          function removeMessage() {
            const parent = document.getElementById("status_message");
            const child = document.getElementById("sentSuccess");
            parent.removeChild(child);
            resetInputFields();
          }
        }
      });
    }

    Array.prototype.forEach.call(mountHooks, (hook) => {
      hook.addEventListener("click", sendEmail);
      hook.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          sendEmail(event);
        }
      });
    });
  },
};

},{}],4:[function(require,module,exports){
module.exports = {
  prepareFooter: function prepareFooter(target) {
    const footer = document.createElement("footer");
    footer.classList.add('ui-footer');
    footer.innerHTML = "<svg viewBox='0 0 500 150' preserveAspectRatio='none' style='height: 100%; width: 100%; position:absolute; bottom:0; left:0;'><path d= 'M0.27,1.47 C222.62,412.00 311.23,-263.98 499.72,150.48 L500.27,153.45 L0.00,150.00 Z' style='stroke: none;fill:#8083FF;'></path></svg><img class='gif gif-footer' src='./graphics/gifs/dancer.webp' alt='dancer' /><strong><p>Created by Piotr Maksymiuk | 2020. © Wszelkie prawa zastrzeżone</p></strong>"
    target.appendChild(footer);
  },
};

},{}],5:[function(require,module,exports){
module.exports = {
  prepareHamburgerMenu: function prepareHamburgerMenu(target, menu, uiAside) {
    if (target && menu && uiAside){
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
  }else{console.log('can not open hamburger menu - missing or falsey arguments')}
  },
};

//s
},{}],6:[function(require,module,exports){
module.exports = {
  prepareProjectModals: function prepareProjectModals(modal) {
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
      //delete_button.classList.add("icon-delete");
      delete_button.classList.add("project-icon-delete");
      delete_button.innerHTML = deleteIconSvgContent; //
      delete_button.tabIndex = 0;
      //delete_button.addEventListener("click", hide_modal);

      function hide_modal() {
        //delete_button.removeEventListener("click", hide_modal);
        projectModalDeleteIcon.removeEventListener("click", hide_modal);
        modal.innerHTML = "";
      }
      modal.appendChild(delete_button);
      const projectModalDeleteIcon = document.getElementById("projectModal-deleteIcon"); //
      projectModalDeleteIcon.addEventListener("click", hide_modal);
      modal.classList.add("large");
      modal.getElementsByClassName("project__image")[0].classList.add("large");
      modal.style.display = "block";

      location.hash = "large-project-content";
      window.scrollBy(0, -document.getElementById("intro").clientHeight);
    }
    showModal = typeof throttle !== "undefined" ? throttle(showModal, 500) : showModal;
    Array.prototype.forEach.call(smallProjectCovers, (cover) => {
      cover.addEventListener("click", showModal);
      cover.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
          showModal(event);
        }
      });
    });
  },
};

},{}],7:[function(require,module,exports){
module.exports = {
  prepareResizeSensor: function prepareResizeSensor(informations, intro) {
    function adjustMargin(item) {
      informations.style.marginTop = item.offsetHeight + "px";
    }

    intro.classList.add("regular");
    adjustMargin(heading);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (typeof ResizeSensor !== "undefined") {
      setTimeout(function () {
        new ResizeSensor(intro, function () {
          adjustMargin(intro);
        });
      }, 5000);
    } else {
      window.alert("ResizeSensor nie jest dostępny");
    }
  },
};

},{}],8:[function(require,module,exports){
module.exports = {
  throttle: function throttle(func, ms) {
    let isThrottled = false,
      savedArgs,
      savedThis;

    function wrapper() {
      if (isThrottled) {
        savedArgs = arguments;
        savedThis = this;
        return;
      }

      func.apply(this, arguments);
      isThrottled = true;

      setTimeout(function () {
        isThrottled = false;
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }
    return wrapper;
  },
};

},{}]},{},[1]);
