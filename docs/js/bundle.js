!function t(e,n,o){function r(s,a){if(!n[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[s]={exports:{}};e[s][0].call(d.exports,(function(t){return r(e[s][1][t]||t)}),d,d.exports,t,e,n,o)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)r(o[s]);return r}({1:[function(t,e,n){e.exports={defineImages:function(){customElements.define("author-name",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(document.getElementById("author-name-template").content.cloneNode("true"))}});class t extends HTMLImageElement{constructor(){super(),this.setAttribute("style","width: 180px; margin: 0 auto;"),this.setAttribute("alt","violet girl"),this.setAttribute("loading","lazy"),this.setAttribute("width","180"),this.setAttribute("height","180"),this.setAttribute("src","./graphics/gifs/violet_girl.webp")}}if(this.customElements)try{customElements.define("violet-girl",t,{extends:"img"})}catch(t){document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\/script>')}else document.write('<script src="//unpkg.com/document-register-element"><\/script>');class e extends HTMLImageElement{constructor(){super(),this.setAttribute("style","width: 200px; margin: 0 auto;"),this.setAttribute("alt","dancing elephant"),this.setAttribute("loading","lazy"),this.setAttribute("width","200"),this.setAttribute("height","200"),this.setAttribute("src","./graphics/gifs/elephant.webp")}}if(this.customElements)try{customElements.define("dancing-elephant",e,{extends:"img"})}catch(t){document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\/script>')}else document.write('<script src="//unpkg.com/document-register-element"><\/script>');class n extends HTMLImageElement{constructor(){super(),this.setAttribute("style","width: 180px; margin: 0 auto;"),this.setAttribute("alt","dancing boys"),this.setAttribute("loading","lazy"),this.setAttribute("width","180"),this.setAttribute("height","165"),this.setAttribute("src","./graphics/gifs/boys.webp")}}if(this.customElements)try{customElements.define("dancing-boys",n,{extends:"img"})}catch(t){document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\/script>')}else document.write('<script src="//unpkg.com/document-register-element"><\/script>');class o extends HTMLImageElement{constructor(){super(),this.setAttribute("style","width: 180px; margin: 0 auto; position: absolute; bottom:0; left:50%; z-index:2000;transform: translateX(-50%);-webkit-transform: translateX(-50%);"),this.setAttribute("alt","dancing nigga"),this.setAttribute("src","./graphics/gifs/dancer.webp")}}if(this.customElements)try{customElements.define("dancing-nigga",o,{extends:"img"})}catch(t){document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\/script>')}else document.write('<script src="//unpkg.com/document-register-element"><\/script>');document.querySelector("#author_foto").attachShadow({mode:"open"}).appendChild(document.querySelector("#author_foto_template").content)}}},{}],2:[function(t,e,n){const{throttle:o}=t("./throttle");function r(t){return"object"==typeof Node?t instanceof Node:t&&"object"==typeof t&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName}function i(t){try{if(!t instanceof Error)throw new Error("it is not error object");console.error(t.name,"\n","\n",t.message,"\n","\n",t.stack)}catch(t){console.log(t.message)}}e.exports={isNode:r,reportError:i,getAttributeValue:function(t,e){const n=document.getElementById(t);if(n){const t=n.currentStyle||window.getComputedStyle(n);return t[e]?parseInt(t[e],10):0}return 0},mountClickAndEnterHandler:function(t,e){try{if(!r(t))throw new Error("item is not a node");if(n=e,"[object Function]"!=Object.prototype.toString.call(n))throw new Error("fn is not a function");if(!t||!document.body.contains(t))throw new Error("item is not a HTML node within document body");t.addEventListener("click",e),t.addEventListener("keyup",(function(t){13===t.keyCode&&(t.preventDefault(),e(t))})),"BUTTON"===t.toUpperCase||t.hasAttribute("tabindex")||t.setAttribute("tabindex","0")}catch(t){i(t)}var n},throttled:function(t,e){return void 0!==o?o(t,e):o}}},{"./throttle":11}],3:[function(t,e,n){const{prepareEmailService:o}=t("./prepareEmailService.js"),{prepareProjectModals:r}=t("./prepareProjectModals"),{prepareResizeSensor:i}=t("./prepareResizeSensor"),{prepareChangeLocation:s}=t("./prepareChangeLocation"),{prepareHamburgerMenu:a}=t("./prepareHamburgerMenu"),{defineImages:c}=t("./defineImages"),{prepareCloseModalsWithEscape:l}=t("./prepareCloseModalsWithEscape"),{showInvisibleContent:d}=t("./showInvisibleContent");var u=t("lozad");window.addEventListener("DOMContentLoaded",t=>{c(),d();u().observe()}),window.onload=function(){const t=document.getElementById("intro"),e=document.getElementById("informations"),n=document.getElementById("heading"),c=document.getElementsByClassName("location-button"),d=document.getElementsByClassName("mail-button"),u=document.getElementById("emailModal"),m=document.getElementById("large-project-content"),g=document.getElementById("hamburger"),p=document.getElementsByTagName("nav"),h=document.getElementById("intro-ui-aside"),f=(document.getElementsByTagName("body")[0],document.getElementById("emailModal-deleteIcon"));i(e,t,n),s(c),r(m),o(d,u,f),a(g,p[0],h),l()}},{"./defineImages":1,"./prepareChangeLocation":4,"./prepareCloseModalsWithEscape":5,"./prepareEmailService.js":6,"./prepareHamburgerMenu":7,"./prepareProjectModals":8,"./prepareResizeSensor":9,"./showInvisibleContent":10,lozad:12}],4:[function(t,e,n){const{mountClickAndEnterHandler:o,throttled:r,reportError:i}=t("./lib");e.exports={prepareChangeLocation:function(t){function e(t){try{if(!t.target.dataset.target)throw new Error("event location has not valid dataset");const e=document.getElementById("intro");window.location.hash="",window.location.hash=t.target.dataset.target,window.scrollBy(0,-e.clientHeight)}catch(t){i(t)}}Array.prototype.forEach.call(t,t=>o(t,r(e,300)))}}},{"./lib":2}],5:[function(t,e,n){e.exports={prepareCloseModalsWithEscape:function(){document.onkeydown=function(t){if("key"in(t=t||window.event)?"Escape"===t.key||"Esc"===t.key:27===t.keyCode){const t=document.getElementById("large-project-content");(t.style.display="block")&&(t.innerHTML="",t.style.display="none");const e=document.getElementById("emailModal");e.classList.contains("active")&&e.classList.remove("active")}}}}},{}],6:[function(t,e,n){const{mountClickAndEnterHandler:o,throttled:r}=t("./lib");e.exports={prepareEmailService:function(t,e,n){function i(){e.classList.toggle("active");let t=document.getElementById("contact-form");t.addEventListener("submit",(function(e){e.preventDefault();const n=document.getElementById("name"),o=document.getElementById("email"),r=document.getElementById("message"),i={name:n.value,email:o.value,message:r.value};function s(e){!function(t){const e=document.getElementById("email_status_message");e.classList.add(t.style),e.innerText=t.text,e.classList.remove("form__message-hidden")}({text:e?"Wysłano":"Błąd połączenia",style:e?"successStyle":"failureStyle"}),setTimeout((function(){document.getElementById("email_status_message").classList.add("form__message-hidden"),t.reset()}),3e3)}fetch("https://formspree.io/mnqgkkgg",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(i)}).then(t=>t.json()).then(t=>s(!0)).catch(t=>s(!1))}))}o(n,r((function(){e&&e.classList.toggle("active")}),300)),Array.prototype.forEach.call(t,t=>o(t,r(i,300)))}}},{"./lib":2}],7:[function(t,e,n){const{mountClickAndEnterHandler:o,throttled:r,reportError:i}=t("./lib");e.exports={prepareHamburgerMenu:function(t,e,n){try{if(!(t&&e&&n))throw new Error("can not open hamburger menu - missing or falsey arguments");toggleMenuVisibility=function(){e.classList.toggle("active"),n.classList.toggle("filled")},o(t,r(toggleMenuVisibility,300))}catch(t){i(t)}}}},{"./lib":2}],8:[function(t,e,n){const{mountClickAndEnterHandler:o,throttled:r,reportError:i}=t("./lib");e.exports={prepareProjectModals:function(t){try{let n=document.getElementsByClassName("project-pointer");function e(e){t.innerHTML=e.target.parentNode.innerHTML,t.removeChild(t.getElementsByClassName("project__name pointer")[0]),t.removeChild(t.getElementsByClassName("project__left-cover")[0]),t.removeChild(t.getElementsByClassName("project__right-cover")[0]),t.getElementsByClassName("initial")[0].classList.toggle("initial");let n=document.getElementById("delete_icon").content.querySelector("div"),o=document.importNode(n,!0);o.addEventListener("click",(function e(){o.removeEventListener("click",e),t.innerHTML="",location.hash="",location.hash="projects",window.scrollBy(0,-document.getElementById("intro").clientHeight)})),t.appendChild(o),t.classList.add("large"),t.getElementsByClassName("project__image")[0].classList.add("large"),t.style.display="block",location.hash="large-project-content",window.scrollBy(0,-document.getElementById("intro").clientHeight)}Array.prototype.forEach.call(n,t=>o(t,r(e,300)))}catch(t){i(t)}}}},{"./lib":2}],9:[function(t,e,n){e.exports={prepareResizeSensor:function(t,e,n){function o(e){requestAnimationFrame((function(){t.style.marginTop=e.offsetHeight+"px"}))}e.classList.add("regular"),o(n),window.scrollTo({top:0,behavior:"smooth"}),"undefined"!=typeof ResizeSensor?setTimeout((function(){new ResizeSensor(e,(function(){o(e)}))}),5e3):window.alert("ResizeSensor nie jest dostępny")}}},{}],10:[function(t,e,n){e.exports={showInvisibleContent:function(){document.getElementById("heading").addEventListener("animationend",(function(){document.querySelectorAll("#informations, #skills, #projects, footer").forEach(t=>t.style.visibility="visible")}))}}},{}],11:[function(t,e,n){e.exports={throttle:function(t,e){let n,o,r=!1;return function i(){if(r)return n=arguments,void(o=this);t.apply(this,arguments),r=!0,setTimeout((function(){r=!1,n&&(i.apply(o,n),n=o=null)}),e)}}}},{}],12:[function(t,e,n){var o,r;o=this,r=function(){"use strict";var t="undefined"!=typeof document&&document.documentMode,e={rootMargin:"0px",threshold:0,load:function(e){if("picture"===e.nodeName.toLowerCase()){var n=e.querySelector("img"),o=!1;null===n&&(n=document.createElement("img"),o=!0),t&&e.getAttribute("data-iesrc")&&(n.src=e.getAttribute("data-iesrc")),e.getAttribute("data-alt")&&(n.alt=e.getAttribute("data-alt")),o&&e.append(n)}if("video"===e.nodeName.toLowerCase()&&!e.getAttribute("data-src")&&e.children){for(var r=e.children,i=void 0,s=0;s<=r.length-1;s++)(i=r[s].getAttribute("data-src"))&&(r[s].src=i);e.load()}e.getAttribute("data-poster")&&(e.poster=e.getAttribute("data-poster")),e.getAttribute("data-src")&&(e.src=e.getAttribute("data-src")),e.getAttribute("data-srcset")&&e.setAttribute("srcset",e.getAttribute("data-srcset"));var a=",";if(e.getAttribute("data-background-delimiter")&&(a=e.getAttribute("data-background-delimiter")),e.getAttribute("data-background-image"))e.style.backgroundImage="url('"+e.getAttribute("data-background-image").split(a).join("'),url('")+"')";else if(e.getAttribute("data-background-image-set")){var c=e.getAttribute("data-background-image-set").split(a),l=c[0].substr(0,c[0].indexOf(" "))||c[0];l=-1===l.indexOf("url(")?"url("+l+")":l,1===c.length?e.style.backgroundImage=l:e.setAttribute("style",(e.getAttribute("style")||"")+"background-image: "+l+"; background-image: -webkit-image-set("+c+"); background-image: image-set("+c+")")}e.getAttribute("data-toggle-class")&&e.classList.toggle(e.getAttribute("data-toggle-class"))},loaded:function(){}};function n(t){t.setAttribute("data-loaded",!0)}var o=function(t){return"true"===t.getAttribute("data-loaded")},r=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var t,i,s=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=Object.assign({},e,a),l=c.root,d=c.rootMargin,u=c.threshold,m=c.load,g=c.loaded,p=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(p=new IntersectionObserver((t=m,i=g,function(e,r){e.forEach((function(e){(0<e.intersectionRatio||e.isIntersecting)&&(r.unobserve(e.target),o(e.target)||(t(e.target),n(e.target),i(e.target)))}))}),{root:l,rootMargin:d,threshold:u}));for(var h,f=r(s,l),b=0;b<f.length;b++)(h=f[b]).getAttribute("data-placeholder-background")&&(h.style.background=h.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=r(s,l),e=0;e<t.length;e++)o(t[e])||(p?p.observe(t[e]):(m(t[e]),n(t[e]),g(t[e])))},triggerLoad:function(t){o(t)||(m(t),n(t),g(t))},observer:p}}},"object"==typeof n&&void 0!==e?e.exports=r():"function"==typeof define&&define.amd?define(r):o.lozad=r()},{}]},{},[3]);