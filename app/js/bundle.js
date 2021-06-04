(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

module.exports = {
cookies:class cookies{

static set(cname, cvalue, exMinutes) {
  
  
  var d = new Date();
  d.setTime(d.getTime() + exMinutes*60*1000);
  var expires = "expires="+ d.toUTCString();
  const stringifiedValue =JSON.stringify(cvalue);
  document.cookie = cname + "=" + stringifiedValue + ";" + expires;
}

static  get(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

}
}
},{}],2:[function(require,module,exports){
module.exports = {
  defineImages: function defineImages() {

    customElements.define('author-name', class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({
          mode: 'open'
        });
        this.shadowRoot.appendChild(document.getElementById('author-name-template').content.cloneNode('true'));
  
      }
    });


    // customElements.define('header-mask', class extends HTMLElement {
    //   constructor() {
    //     super();
    //     this.attachShadow({
    //       mode: 'open'
    //     });
    //     this.shadowRoot.appendChild(document.getElementById('header-mask-template').content.cloneNode('true'));
  
    //   }
    // });





















    class violetGirl extends HTMLImageElement {
      constructor() {
        super();

        this.setAttribute("style", "width: 180px; margin: 0 auto;");
        this.setAttribute("alt", "violet girl");
        this.setAttribute("loading", "lazy");
        this.setAttribute("width", "180");
        this.setAttribute("height", "180");
        this.setAttribute("src", "./graphics/gifs/violet_girl.webp");
      }
    }

    if (this.customElements) {
      try {
        customElements.define("violet-girl", violetGirl, {
          extends: "img"
        });
      } catch (_) {
        document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\x2fscript>');
      }
    } else {
      document.write('<script src="//unpkg.com/document-register-element"><\x2fscript>');
    }

    class elephant extends HTMLImageElement {
      constructor() {
        super();

        this.setAttribute("style", "width: 200px; margin: 0 auto;");
        this.setAttribute("alt", "dancing elephant");
        this.setAttribute("loading", "lazy");
        this.setAttribute("width", "200");
        this.setAttribute("height", "200");
        this.setAttribute("src", "./graphics/gifs/elephant.webp");
      }
    }

    if (this.customElements) {
      try {
        customElements.define("dancing-elephant", elephant, {
          extends: "img"
        });
      } catch (_) {
        document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\x2fscript>');
      }
    } else {
      document.write('<script src="//unpkg.com/document-register-element"><\x2fscript>');
    }

    class boys extends HTMLImageElement {
      constructor() {
        super();

        this.setAttribute("style", "width: 180px; margin: 0 auto;");
        this.setAttribute("alt", "dancing boys");
        this.setAttribute("loading", "lazy");
        this.setAttribute("width", "180");
        this.setAttribute("height", "165");
        this.setAttribute("src", "./graphics/gifs/boys.webp");
      }
    }

    if (this.customElements) {
      try {
        customElements.define("dancing-boys", boys, {
          extends: "img"
        });
      } catch (_) {
        document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\x2fscript>');
      }
    } else {
      document.write('<script src="//unpkg.com/document-register-element"><\x2fscript>');
    }










    class nigga extends HTMLImageElement {
      constructor() {
        super();

        this.setAttribute("style", "width: 180px; margin: 0 auto; position: absolute; bottom:0; left:50%; z-index:2000;transform: translateX(-50%);-webkit-transform: translateX(-50%);");
        this.setAttribute("alt", "dancing nigga");
        this.setAttribute("src", "./graphics/gifs/dancer.webp");
      }
    }

    if (this.customElements) {
      try {
        customElements.define("dancing-nigga", nigga, {
          extends: "img"
        });
      } catch (_) {
        document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\x2fscript>');
      }
    } else {
      document.write('<script src="//unpkg.com/document-register-element"><\x2fscript>');
    }



    class blueGirl extends HTMLImageElement {
      constructor() {
        super();

        this.setAttribute("style", "opacity: 0%; animation: girl-intro 0.3s ease-in-out 4s forwards; float: left;");
        this.setAttribute("id", "girl");
        this.setAttribute("alt", "blue girl");
        this.setAttribute("loading", "lazy");
        this.setAttribute("width", "100");
        this.setAttribute("height", "204");
        this.setAttribute("src", "./graphics/gifs/blue_girl.webp");
      }
    }

    if (this.customElements) {
      try {
        customElements.define("blue-girl", blueGirl, {
          extends: "img"
        });
      } catch (_) {
        document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\x2fscript>');
      }
    } else {
      document.write('<script src="//unpkg.com/document-register-element"><\x2fscript>');
    }




    class redGirl extends HTMLImageElement {
      constructor() {
        super();

        this.setAttribute("style", "opacity: 0%; animation: girl-intro 0.3s ease-in-out 4s forwards; @keyframes girl-intro {from {opacity: 0%;}to { opacity: 100%; }}")
        
        this.setAttribute("alt", "red girl");
        this.setAttribute("loading", "lazy");
        this.setAttribute("width", "99");
        this.setAttribute("height", "201");
        this.setAttribute("src", "./graphics/gifs/red_girl.webp");
      }
    }

    if (this.customElements) {
      try {
        customElements.define("red-girl", redGirl, {
          extends: "img"
        });
      } catch (_) {
        document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\x2fscript>');
      }
    } else {
      document.write('<script src="//unpkg.com/document-register-element"><\x2fscript>');
    }











    class headerMask extends HTMLImageElement {
      constructor() {
        super();
        this.setAttribute("style", 
        "height: 100%; width: 100%; position: absolute; top: 0; right: 0; background-color: #fb6542; will-change: transform; will-change: opacity; -webkit-animation: heading-enter 2s cubic-bezier(.61,0,.2,1) 1s both,heading-color 2s ease-in-out 3s forwards; animation: heading-enter 2s cubic-bezier(.61,0,.2,1) 1s both,heading-color 2s ease-in-out 3s forwards;"
      );
    }
    }

    if (this.customElements) {
      try {
        customElements.define("header-mask", headerMask, {
          extends: "div"
        });
      } catch (_) {
        document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\x2fscript>');
      }
    } else {
      document.write('<script src="//unpkg.com/document-register-element"><\x2fscript>');
    }



























    const shadow = document.querySelector("#author_foto").attachShadow({
      mode: "open",
    });
    shadow.appendChild(document.querySelector("#author_foto_template").content);
  },

};
},{}],3:[function(require,module,exports){
const {emailStyle, emailInnerText} = require("./fixtures");
module.exports = {
    EmailStatusMessage_Class: class EmailStatusMessage {
      constructor(node) {
        this.node = node;
        this.style = emailStyle;
        this.innerText = emailInnerText;
        this.handleStatus = this.handleStatus.bind(this);
      }

      hide(){
        this.node.classList.add("form__message-hidden");
      }
      handleStatus(status){

        switch(status) {
            case true:
              status ='success';
              break;
            case false:
              status = 'failure';
              break;
            default:
              status = status;
          } 
        this.node.classList.remove(...Object.values(this.style));

        this.node.classList.add(this.style[status]);
        this.node.innerText = this.innerText[status];
        this.node.classList.remove("form__message-hidden");
      }
    }
}
},{"./fixtures":4}],4:[function(require,module,exports){
module.exports = {
    cookieName: 'Piotr_Maksymiuk_Portfolio_email_cookie',
    cookieValue: 'email_recently_sent',
    URL: "https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json",
    emailStyle: {
        success:'successStyle',
        failure:'failureStyle',
        warning:'warningStyle',
    },
    emailInnerText: {
        success:'Wysłano',
        failure:'Błąd połączenia',
        warning:'Anti - flood 1 minute break',
    },
}

},{}],5:[function(require,module,exports){
const { throttle } = require("./throttle");

function isFunction(x) {
  return Object.prototype.toString.call(x) == "[object Function]";
}

function isNode(o) {
  return typeof Node === "object" ? o instanceof Node : o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName === "string";
}

function reportError(err) {
  try {
    if (!err instanceof Error) {
      throw new Error("it is not error object");
    }
    console.error(err.name, "\n", "\n", err.message, "\n", "\n", err.stack);
  } catch (e) {
    console.log(e.message);
  }
}

function getAttributeValue(target, attr) {
  
    const item = document.getElementById(target);
    if(item){
    const style = item.currentStyle || window.getComputedStyle(item);
    return style[attr] ? parseInt(style[attr], 10) : 0;
  } else {
    return 0;
  }
}

module.exports = {
  isNode: isNode,
  reportError: reportError,
  getAttributeValue: getAttributeValue,
  mountClickAndEnterHandler: function mountClickAndEnterHandler(item, fn) {
    try {
      if (!isNode(item)) {
        throw new Error("item is not a node");
      }
      if (!isFunction(fn)) {
        throw new Error("fn is not a function");
      }
      if (!item || !document.body.contains(item)) {
        throw new Error("item is not a HTML node within document body");
      }
      item.addEventListener("click", fn);
      item.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          fn(event);
        }
      });

      if (item.toUpperCase !== "BUTTON" && !item.hasAttribute("tabindex")) {
        item.setAttribute("tabindex", "0");
      }
    } catch (err) {
      reportError(err);
    }
  },
  throttled: function throttled(fn, delay) {
    return typeof throttle !== "undefined" ? throttle(fn, delay) : throttle;
  },
};

},{"./throttle":15}],6:[function(require,module,exports){
const { prepareEmailService } = require("./prepareEmailService.js");
const { prepareProjectModals } = require("./prepareProjectModals");
const { prepareResizeSensor } = require("./prepareResizeSensor");
const { prepareChangeLocation } = require("./prepareChangeLocation");
const { prepareHamburgerMenuNew } = require("./prepareHamburgerMenuNew");
const { defineImages } = require("./defineImages");
const { prepareCloseModalsWithEscape } = require("./prepareCloseModalsWithEscape");
const { showInvisibleContent } = require("./showInvisibleContent");
const { prepareServiceWorker } =  require("./prepareServiceWorker");
var lozad = require("lozad");

window.addEventListener("DOMContentLoaded", event => {
  defineImages();
  showInvisibleContent();
  const observer = lozad(); 
  observer.observe();
});

window.addEventListener('load', 
  function() { 
  const intro = document.getElementById("intro");
  const informations = document.getElementById("informations");
  const heading = document.getElementById("heading");
  const locationButtons = document.getElementsByClassName("location-button");
  const mailButtons = document.getElementsByClassName("mail-button");
  const emailModal = document.getElementById("emailModal");
  const projectModal = document.getElementById("large-project-content");
  const hamburgerMenu = document.getElementById("hamburger");
  const iconDeleteEmailModal = document.getElementById("emailModal-deleteIcon");
  const mobileMenu = document.querySelector(".mobile-menu");

  prepareResizeSensor(informations, intro, heading);
  prepareChangeLocation(locationButtons);
  prepareProjectModals(projectModal);
  prepareEmailService(mailButtons, emailModal, iconDeleteEmailModal);
  prepareHamburgerMenuNew(hamburgerMenu, mobileMenu);
  prepareCloseModalsWithEscape();
  prepareServiceWorker();

  // if ("serviceWorker" in navigator) {
  //   const prefix = location.pathname.replace(/\/(index\.html)?$/, "");
  //   navigator.serviceWorker.register(`${prefix}/sw.js`).then(
  //     function (registration) {
  //       console.log("[success] scope: ", registration.scope);
  //     },
  //     function (err) {
  //       console.log("[fail]: ", err);
  //     }
  //   );
  // }


  }, false);
},{"./defineImages":2,"./prepareChangeLocation":7,"./prepareCloseModalsWithEscape":8,"./prepareEmailService.js":9,"./prepareHamburgerMenuNew":10,"./prepareProjectModals":11,"./prepareResizeSensor":12,"./prepareServiceWorker":13,"./showInvisibleContent":14,"lozad":16}],7:[function(require,module,exports){
const { mountClickAndEnterHandler, throttled, reportError } = require("./lib");
module.exports = {
  prepareChangeLocation: function prepareChangeLocation(buttons) {
    function changeLocation(ev) {
      
        if (ev.target.dataset.target) {  
        const intro = document.getElementById("intro");
        window.location.hash = "";
        window.location.hash = ev.target.dataset.target;
        window.scrollBy(0, -intro.clientHeight);
        }
    }

  

    const body = document.querySelector('body');
    
    body && mountClickAndEnterHandler(body, throttled(changeLocation, 300));


  }
};



},{"./lib":5}],8:[function(require,module,exports){
module.exports = {
  prepareCloseModalsWithEscape: function prepareCloseModalsWithEscape() {
    document.onkeydown = function (evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
        isEscape = evt.key === "Escape" || evt.key === "Esc";
      } else {
        isEscape = evt.keyCode === 27;
      }
      if (isEscape) {
        const project = document.getElementById('large-project-content');
        if (project.style.display ='block'){
            project.innerHTML = "";
            project.style.display = 'none';
        }
        const email = document.getElementById('emailModal');
        if(email.classList.contains('active')){
            email.classList.remove('active');
        }
      }
    };
  },
};

},{}],9:[function(require,module,exports){
const { mountClickAndEnterHandler, throttled } = require("./lib");
const { cookies } = require("./cookies");
const {cookieName, cookieValue} = require("./fixtures");
const { EmailStatusMessage_Class } = require("./emailStatusMessage");

module.exports = {
  prepareEmailService: function prepareEmailService(mountHooks, emailModal, iconDelete) {
    
    mountClickAndEnterHandler(iconDelete, throttled(toggleEmailModalVisibility, 300));
    
    function toggleEmailModalVisibility() {
      if (emailModal) {
        emailModal.classList.toggle("active");
      }
    }

    function sendEmail() {
      emailModal.classList.toggle("active");
      let form = document.getElementById("contact-form");
      let emailMessage = document.getElementById("email_status_message");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const emailSentRecently = !!cookies.get(cookieName);
         
        if(emailSentRecently){
          const handleResult = new EmailStatusMessage_Class(emailMessage);
          handleResult.handleStatus('warning');
          setTimeout(function () {
            handleResult.hide();
            form.reset();
          }, 3000);
          return;
        }

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        const content = {
          name: name.value,
          email: email.value,
          message: message.value,
        };

        //fetch("https://www.enformed.io/9kibv8hh/", {
        fetch("https://formspree.io/mnqgkkgg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(content),
        })
          .then(response => response.json())
          .then(data => handleResult(true))
          .catch(error => handleResult(false));

        function handleResult(alert,callback) {
          
          if (alert){
            cookies.set(cookieName, cookieValue, 1);
          }
          const handleResult = new EmailStatusMessage_Class(emailMessage);
          handleResult.handleStatus(alert);
          setTimeout(function () {
            handleResult.hide();
            form.reset();
          }, 3000);

        }
      });
    }

    Array.prototype.forEach.call(mountHooks, hook => mountClickAndEnterHandler(hook, throttled(sendEmail, 300)));
  },
};

},{"./cookies":1,"./emailStatusMessage":3,"./fixtures":4,"./lib":5}],10:[function(require,module,exports){

const { mountClickAndEnterHandler, throttled} = require("./lib");

module.exports = {
  prepareHamburgerMenuNew: function prepareHamburgerMenu(target, menu) {
    try {
      if (!(target && menu)) {
        
        throw new Error("can not open hamburger menu - missing or falsey arguments");
      }
     
      toggleClassMenuMobile = function () {
        menu.classList.add("mobile-menu--animatable");	
        if(!menu.classList.contains("mobile-menu--visible")) {		
          menu.classList.add("mobile-menu--visible");
        } else {
          menu.classList.remove('mobile-menu--visible');		
        }	
      },

      OnTransitionEndMenuMobile =function () {
        menu.classList.remove("mobile-menu--animatable");
      }
      menu.addEventListener("transitionend", OnTransitionEndMenuMobile, false);
      mountClickAndEnterHandler(target, throttled(toggleClassMenuMobile, 300));
      mountClickAndEnterHandler(menu, throttled(toggleClassMenuMobile, 300));

    } catch (err) {console.log(err)}

  },
};

},{"./lib":5}],11:[function(require,module,exports){
const { mountClickAndEnterHandler, throttled, reportError } = require("./lib");

module.exports = {
  prepareProjectModals: function prepareProjectModals(modal) {
    try{
    let smallProjectCovers = document.getElementsByClassName("project-pointer");

    function showModal(ev) {
      modal.innerHTML = ev.target.parentNode.innerHTML;
      modal.removeChild(modal.getElementsByClassName("project__name pointer")[0]);
      modal.removeChild(modal.getElementsByClassName("project__left-cover")[0]);
      modal.removeChild(modal.getElementsByClassName("project__right-cover")[0]);
      modal.getElementsByClassName("initial")[0].classList.toggle("initial");

      let deleteButtonPattern = document.getElementById('delete_icon').content.querySelector("div");
      let deleteButtonPatternContent = document.importNode(deleteButtonPattern, true);
      deleteButtonPatternContent.addEventListener("click", hide_modal);

      function hide_modal() {

        deleteButtonPatternContent.removeEventListener("click", hide_modal);
        modal.innerHTML = "";
        location.hash = "";
        location.hash = "projects";
        window.scrollBy(0, -document.getElementById("intro").clientHeight);

      }
     
      modal.appendChild(deleteButtonPatternContent);
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

},{"./lib":5}],12:[function(require,module,exports){
module.exports = {
  prepareResizeSensor: function prepareResizeSensor(informations, intro, heading) {
    intro.classList.add("regular");// prawdopodbnie tu by lepiej poszło flip
    adjustInformationsMargin(heading);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (typeof ResizeSensor !== "undefined") {
      setTimeout(function () {
        new ResizeSensor(intro, function () {
          adjustInformationsMargin(intro);
        });
      }, 5000);
    } else {
      window.alert("ResizeSensor nie jest dostępny");
    }

    function adjustInformationsMargin(item) {
    
      requestAnimationFrame(function(){informations.style.marginTop = item.offsetHeight + "px"});
     
    }
  },
};

},{}],13:[function(require,module,exports){

  module.exports = {prepareServiceWorker:function prepareServiceWorker (){

    if ("serviceWorker" in navigator) {
      const prefix = location.pathname.replace(/\/(index\.html)?$/, "");
      navigator.serviceWorker.register(`${prefix}/sw.js`).then(
        function (registration) {
          console.log("[success] scope: ", registration.scope);
        },
        function (err) {
          console.log("[fail]: ", err);
        }
      );
    }
  

  } }
  
  
},{}],14:[function(require,module,exports){
module.exports = {
  showInvisibleContent: function showInvisibleContent() {
    document.getElementById("heading-mask").addEventListener("animationend", showContent);
    function showContent() {
      const invisibles = document.querySelectorAll("#informations, #skills, #projects, footer");
      invisibles.forEach(element => (element.style.visibility = "visible"));
    }
  },
};

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
/*! lozad.js - v1.16.0 - 2020-09-06
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2020 Apoorv Saxena; Licensed MIT */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.lozad=e()}(this,function(){"use strict";
/**
   * Detect IE browser
   * @const {boolean}
   * @private
   */var g="undefined"!=typeof document&&document.documentMode,f={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),r=!1;null===e&&(e=document.createElement("img"),r=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),r&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,o=void 0,i=0;i<=a.length-1;i++)(o=a[i].getAttribute("data-src"))&&(a[i].src=o);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var n=",";if(t.getAttribute("data-background-delimiter")&&(n=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(n).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var d=t.getAttribute("data-background-image-set").split(n),u=d[0].substr(0,d[0].indexOf(" "))||d[0];// Substring before ... 1x
u=-1===u.indexOf("url(")?"url("+u+")":u,1===d.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+d+"); background-image: image-set("+d+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function A(t){t.setAttribute("data-loaded",!0)}var m=function(t){return"true"===t.getAttribute("data-loaded")},v=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var r,a,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=Object.assign({},f,t),i=e.root,n=e.rootMargin,d=e.threshold,u=e.load,g=e.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((r=u,a=g,function(t,e){t.forEach(function(t){(0<t.intersectionRatio||t.isIntersecting)&&(e.unobserve(t.target),m(t.target)||(r(t.target),A(t.target),a(t.target)))})}),{root:i,rootMargin:n,threshold:d}));for(var c,l=v(o,i),b=0;b<l.length;b++)(c=l[b]).getAttribute("data-placeholder-background")&&(c.style.background=c.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=v(o,i),e=0;e<t.length;e++)m(t[e])||(s?s.observe(t[e]):(u(t[e]),A(t[e]),g(t[e])))},triggerLoad:function(t){m(t)||(u(t),A(t),g(t))},observer:s}}});

},{}]},{},[6]);
