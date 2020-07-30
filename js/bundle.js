(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { prepareEmailService } = require("./prepareEmailService.js");
const { prepareProjectModals } = require("./prepareProjectModals");
const { prepareResizeSensor } = require("./prepareResizeSensor");
const { prepareChangeLocation } = require("./prepareChangeLocation");
const { prepareHamburgerMenu } = require("./prepareHamburgerMenu");
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

  if (!(informations && heading && intro && locationButtons && mailButtons && emailModal && hamburger && menu &&introUIAside)) {
    window.alert("Nie odnaleziono jednego lub więcej ważnych identyfikatorów. Strona nie będzie działać proawidłowo");
    return false;
  }
  
  prepareResizeSensor(informations, intro);
  prepareChangeLocation(locationButtons);
  prepareProjectModals(projectModal);
  prepareEmailService(mailButtons, emailModal);
  prepareHamburgerMenu(hamburgerMenu, menu[0], introUIAside);

};

},{"./prepareChangeLocation":2,"./prepareEmailService.js":3,"./prepareHamburgerMenu":4,"./prepareProjectModals":5,"./prepareResizeSensor":6,"./throttle":7}],2:[function(require,module,exports){
module.exports = {
  prepareChangeLocation: function prepareChangeLocation(buttons) {
    function change_location(ev) {
      location.hash = ev.target.dataset.target;
      window.scrollBy(0, -intro.clientHeight);
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
  prepareEmailService: function prepareEmailService(mountHooks, emailModal) {
    function sendEmail() {
      function toggleEmailModalVisibility() {
        emailModal.classList.toggle("active");
      }
      toggleEmailModalVisibility();
      const iconDelete = emailModal.getElementsByClassName("icon-delete")[0];
      iconDelete.addEventListener("click", toggleEmailModalVisibility);
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

},{}],5:[function(require,module,exports){
module.exports = {
  prepareProjectModals: function prepareProjectModals(modal) {
    let smallProjectCovers = document.getElementsByClassName("project-pointer");

    function showModal(ev) {
      modal.innerHTML = ev.target.parentNode.innerHTML;
      modal.removeChild(modal.getElementsByClassName("project__name pointer")[0]);
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

      location.hash = "projects";
      window.scrollBy(0, -document.getElementById("intro").clientHeight);
    }
    showModal = typeof throttle !== "undefined" ? throttle(showModal, 500) : showModal;
    Array.prototype.forEach.call(smallProjectCovers, (cover) => {
      cover.addEventListener("click", showModal);
    });
  },
};

},{}],6:[function(require,module,exports){


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

},{}],7:[function(require,module,exports){
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
