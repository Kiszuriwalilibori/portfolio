!function e(t,n,o){function r(a,s){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[a]={exports:{}};t[a][0].call(d.exports,(function(e){return r(t[a][1][e]||e)}),d,d.exports,e,t,n,o)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(e,t,n){const{throttle:o}=e("./throttle");function r(e){return"object"==typeof Node?e instanceof Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName}function i(e){try{if(!e instanceof Error)throw new Error("it is not error object");console.error(e.name,"\n","\n",e.message,"\n","\n",e.stack)}catch(e){console.log(e.message)}}t.exports={isNode:r,reportError:i,mountClickAndEnterHandler:function(e,t){try{if(!r(e))throw new Error("item is not a node");if(n=t,"[object Function]"!=Object.prototype.toString.call(n))throw new Error("fn is not a function");if(!e||!document.body.contains(e))throw new Error("item is not a HTML node within document body");e.addEventListener("click",t),e.addEventListener("keyup",(function(e){13===e.keyCode&&(e.preventDefault(),t(e))})),"BUTTON"===e.toUpperCase||e.hasAttribute("tabindex")||e.setAttribute("tabindex","0")}catch(e){i(e)}var n},throttled:function(e,t){return void 0!==o?o(e,t):o}}},{"./throttle":9}],2:[function(e,t,n){const{prepareEmailService:o}=e("./prepareEmailService.js"),{prepareProjectModals:r}=e("./prepareProjectModals"),{prepareResizeSensor:i}=e("./prepareResizeSensor"),{prepareChangeLocation:a}=e("./prepareChangeLocation"),{prepareHamburgerMenu:s}=e("./prepareHamburgerMenu"),{prepareFooter:c}=e("./prepareFooter"),{throttle:l}=e("./throttle");window.onload=function(){const e=document.getElementById("intro"),t=document.getElementById("informations"),n=document.getElementById("heading"),l=document.getElementsByClassName("location-button"),d=document.getElementsByClassName("mail-button"),p=document.getElementById("emailModal"),m=document.getElementById("large-project-content"),u=document.getElementById("hamburger"),g=document.getElementsByTagName("nav"),f=document.getElementById("intro-ui-aside"),h=document.getElementsByTagName("body")[0],y=document.getElementById("emailModal-deleteIcon");if(!(t&&n&&e&&l&&d&&p&&hamburger&&g&&f&&h&&y))return window.alert("Nie odnaleziono jednego lub więcej ważnych identyfikatorów. Strona nie będzie działać proawidłowo"),!1;i(t,e),a(l),r(m),o(d,p,y),s(u,g[0],f),c(h)}},{"./prepareChangeLocation":3,"./prepareEmailService.js":4,"./prepareFooter":5,"./prepareHamburgerMenu":6,"./prepareProjectModals":7,"./prepareResizeSensor":8,"./throttle":9}],3:[function(e,t,n){const{mountClickAndEnterHandler:o,throttled:r,reportError:i}=e("./lib");t.exports={prepareChangeLocation:function(e){function t(e){try{if(!e.target.dataset.target)throw new Error("event location has not valid dataset");const t=document.getElementById("intro");window.location.hash="",window.location.hash=e.target.dataset.target,window.scrollBy(0,-t.clientHeight)}catch(e){i(e)}}Array.prototype.forEach.call(e,e=>o(e,r(t,300)))}}},{"./lib":1}],4:[function(e,t,n){const{mountClickAndEnterHandler:o,throttled:r}=e("./lib");t.exports={prepareEmailService:function(e,t,n){function i(){t.classList.toggle("active");let e=document.getElementById("contact-form");e.addEventListener("submit",(function(t){t.preventDefault();const n=document.getElementById("name"),o=document.getElementById("email"),r=document.getElementById("message"),i={name:n.value,email:o.value,message:r.value};function a(t){!function(e){const t=document.getElementById("email_status_message");t.classList.add(e.style),t.innerText=e.text,t.classList.remove("form__message-hidden")}({text:t?"Wysłano":"Błąd połączenia",style:t?"successStyle":"failureStyle"}),setTimeout((function(){document.getElementById("email_status_message").classList.add("form__message-hidden"),e.reset()}),3e3)}fetch("https://formspree.io/mnqgkkgg",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(i)}).then(e=>e.json()).then(e=>a(!0)).catch(e=>a(!1))}))}o(n,r((function(){t&&t.classList.toggle("active")}),300)),Array.prototype.forEach.call(e,e=>o(e,r(i,300)))}}},{"./lib":1}],5:[function(e,t,n){const{isNode:o,reportError:r}=e("./lib");t.exports={prepareFooter:function(e){try{if(!o(e))throw new Error("passed argument is not a node");const t=document.createElement("footer");t.classList.add("ui-footer"),t.innerHTML="<svg viewBox='0 0 500 150' preserveAspectRatio='none' style='height: 100%; width: 100%; position:absolute; bottom:0; left:0;'><path d= 'M0.27,1.47 C222.62,412.00 311.23,-263.98 499.72,150.48 L500.27,153.45 L0.00,150.00 Z' style='stroke: none;fill:#8083FF;'></path></svg><img class='gif gif-footer' src='./graphics/gifs/dancer.webp' alt='dancer' /><strong><p>Created by Piotr Maksymiuk | 2020. © Wszelkie prawa zastrzeżone</p></strong>",e.appendChild(t)}catch(e){r(e)}}}},{"./lib":1}],6:[function(e,t,n){const{mountClickAndEnterHandler:o,throttled:r,reportError:i}=e("./lib");t.exports={prepareHamburgerMenu:function(e,t,n){try{if(!(e&&t&&n))throw new Error("can not open hamburger menu - missing or falsey arguments");toggleMenuVisibility=function(){t.classList.toggle("active"),n.classList.toggle("filled")},o(e,r(toggleMenuVisibility,300))}catch(e){i(e)}}}},{"./lib":1}],7:[function(e,t,n){const{mountClickAndEnterHandler:o,throttled:r,reportError:i}=e("./lib");t.exports={prepareProjectModals:function(e){try{let n=document.getElementsByClassName("project-pointer");function t(t){e.innerHTML=t.target.parentNode.innerHTML,e.removeChild(e.getElementsByClassName("project__name pointer")[0]),e.removeChild(e.getElementsByClassName("left-cover")[0]),e.removeChild(e.getElementsByClassName("right-cover")[0]),e.getElementsByClassName("initial")[0].classList.toggle("initial");const n=document.createElement("div");n.classList.add("project-icon-delete"),n.innerHTML='<svg id = "projectModal-deleteIcon" height="65px" viewBox="0 0 365.71733 365" width="65px" xmlns="http://www.w3.org/2000/svg"><g fill="#f44336"><path d="m356.339844 296.347656-286.613282-286.613281c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503906-12.5 32.769532 0 45.25l286.613281 286.613282c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082032c12.523438-12.480468 12.523438-32.75.019532-45.25zm0 0"/><path d="m295.988281 9.734375-286.613281 286.613281c-12.5 12.5-12.5 32.769532 0 45.25l15.082031 15.082032c12.503907 12.5 32.769531 12.5 45.25 0l286.632813-286.59375c12.503906-12.5 12.503906-32.765626 0-45.246094l-15.082032-15.082032c-12.5-12.523437-32.765624-12.523437-45.269531-.023437zm0 0"/></g></svg>',n.tabIndex=0,e.appendChild(n);const o=document.getElementById("projectModal-deleteIcon");o.addEventListener("click",(function t(){o.removeEventListener("click",t),e.innerHTML=""})),e.classList.add("large"),e.getElementsByClassName("project__image")[0].classList.add("large"),e.style.display="block",location.hash="large-project-content",window.scrollBy(0,-document.getElementById("intro").clientHeight)}Array.prototype.forEach.call(n,e=>o(e,r(t,300)))}catch(e){i(e)}}}},{"./lib":1}],8:[function(e,t,n){t.exports={prepareResizeSensor:function(e,t){function n(t){e.style.marginTop=t&&t.offsetHeight?t.offsetHeight+"px":0}t.classList.add("regular"),n(heading),window.scrollTo({top:0,behavior:"smooth"}),"undefined"!=typeof ResizeSensor?setTimeout((function(){new ResizeSensor(t,(function(){n(t)}))}),5e3):window.alert("ResizeSensor nie jest dostępny")}}},{}],9:[function(e,t,n){t.exports={throttle:function(e,t){let n,o,r=!1;return function i(){if(r)return n=arguments,void(o=this);e.apply(this,arguments),r=!0,setTimeout((function(){r=!1,n&&(i.apply(o,n),n=o=null)}),t)}}}},{}]},{},[2]);