!function e(t,n,o){function i(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(r)return r(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[s]={exports:{}};t[s][0].call(d.exports,(function(e){return i(t[s][1][e]||e)}),d,d.exports,e,t,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(e,t,n){t.exports={defineImages:function(){customElements.define("author-name",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(document.getElementById("author-name-template").content.cloneNode("true"))}});class e extends HTMLImageElement{constructor(){super(),this.setAttribute("style","width: 180px; margin: 0 auto;"),this.setAttribute("alt","violet girl"),this.setAttribute("loading","lazy"),this.setAttribute("width","180"),this.setAttribute("height","180"),this.setAttribute("src","./graphics/gifs/violet_girl.webp")}}if(this.customElements)try{customElements.define("violet-girl",e,{extends:"img"})}catch(e){document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\/script>')}else document.write('<script src="//unpkg.com/document-register-element"><\/script>');class t extends HTMLImageElement{constructor(){super(),this.setAttribute("style","width: 200px; margin: 0 auto;"),this.setAttribute("alt","dancing elephant"),this.setAttribute("loading","lazy"),this.setAttribute("width","200"),this.setAttribute("height","200"),this.setAttribute("src","./graphics/gifs/elephant.webp")}}if(this.customElements)try{customElements.define("dancing-elephant",t,{extends:"img"})}catch(e){document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\/script>')}else document.write('<script src="//unpkg.com/document-register-element"><\/script>');class n extends HTMLImageElement{constructor(){super(),this.setAttribute("style","width: 180px; margin: 0 auto;"),this.setAttribute("alt","dancing boys"),this.setAttribute("loading","lazy"),this.setAttribute("width","180"),this.setAttribute("height","165"),this.setAttribute("src","./graphics/gifs/boys.webp")}}if(this.customElements)try{customElements.define("dancing-boys",n,{extends:"img"})}catch(e){document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\/script>')}else document.write('<script src="//unpkg.com/document-register-element"><\/script>');class o extends HTMLImageElement{constructor(){super(),this.setAttribute("style","width: 180px; margin: 0 auto; position: absolute; bottom:0; left:50%; z-index:2000;transform: translateX(-50%);-webkit-transform: translateX(-50%);"),this.setAttribute("alt","dancing nigga"),this.setAttribute("src","./graphics/gifs/dancer.webp")}}if(this.customElements)try{customElements.define("dancing-nigga",o,{extends:"img"})}catch(e){document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\/script>')}else document.write('<script src="//unpkg.com/document-register-element"><\/script>');document.querySelector("#author_foto").attachShadow({mode:"open"}).appendChild(document.querySelector("#author_foto_template").content)}}},{}],2:[function(e,t,n){const{throttle:o}=e("./throttle");function i(e){return"object"==typeof Node?e instanceof Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName}function r(e){try{if(!e instanceof Error)throw new Error("it is not error object");console.error(e.name,"\n","\n",e.message,"\n","\n",e.stack)}catch(e){console.log(e.message)}}t.exports={isNode:i,reportError:r,getAttributeValue:function(e,t){const n=document.getElementById(e);if(n){const e=n.currentStyle||window.getComputedStyle(n);return e[t]?parseInt(e[t],10):0}return 0},mountClickAndEnterHandler:function(e,t){try{if(!i(e))throw new Error("item is not a node");if(n=t,"[object Function]"!=Object.prototype.toString.call(n))throw new Error("fn is not a function");if(!e||!document.body.contains(e))throw new Error("item is not a HTML node within document body");e.addEventListener("click",t),e.addEventListener("keyup",(function(e){13===e.keyCode&&(e.preventDefault(),t(e))})),"BUTTON"===e.toUpperCase||e.hasAttribute("tabindex")||e.setAttribute("tabindex","0")}catch(e){r(e)}var n},throttled:function(e,t){return void 0!==o?o(e,t):o}}},{"./throttle":11}],3:[function(e,t,n){const{prepareEmailService:o}=e("./prepareEmailService.js"),{prepareProjectModals:i}=e("./prepareProjectModals"),{prepareResizeSensor:r}=e("./prepareResizeSensor"),{prepareChangeLocation:s}=e("./prepareChangeLocation"),{prepareHamburgerMenu:a}=e("./prepareHamburgerMenu"),{defineImages:c}=e("./defineImages"),{prepareCloseModalsWithEscape:l}=e("./prepareCloseModalsWithEscape"),{showInvisibleContent:d}=e("./showInvisibleContent");window.addEventListener("DOMContentLoaded",e=>{c(),d()}),window.onload=function(){const e=document.getElementById("intro"),t=document.getElementById("informations"),n=document.getElementById("heading"),c=document.getElementsByClassName("location-button"),d=document.getElementsByClassName("mail-button"),u=document.getElementById("emailModal"),m=document.getElementById("large-project-content"),p=document.getElementById("hamburger"),g=document.getElementsByTagName("nav"),h=document.getElementById("intro-ui-aside"),f=document.getElementsByTagName("body")[0],y=document.getElementById("emailModal-deleteIcon");if(!(t&&n&&e&&c&&d&&u&&hamburger&&g&&h&&f&&y))return window.alert("Nie odnaleziono jednego lub więcej ważnych identyfikatorów. Strona nie będzie działać proawidłowo"),!1;r(t,e,n),s(c),i(m),o(d,u,y),a(p,g[0],h),l()}},{"./defineImages":1,"./prepareChangeLocation":4,"./prepareCloseModalsWithEscape":5,"./prepareEmailService.js":6,"./prepareHamburgerMenu":7,"./prepareProjectModals":8,"./prepareResizeSensor":9,"./showInvisibleContent":10}],4:[function(e,t,n){const{mountClickAndEnterHandler:o,throttled:i,reportError:r}=e("./lib");t.exports={prepareChangeLocation:function(e){function t(e){try{if(!e.target.dataset.target)throw new Error("event location has not valid dataset");const t=document.getElementById("intro");window.location.hash="",window.location.hash=e.target.dataset.target,window.scrollBy(0,-t.clientHeight)}catch(e){r(e)}}Array.prototype.forEach.call(e,e=>o(e,i(t,300)))}}},{"./lib":2}],5:[function(e,t,n){t.exports={prepareCloseModalsWithEscape:function(){document.onkeydown=function(e){if("key"in(e=e||window.event)?"Escape"===e.key||"Esc"===e.key:27===e.keyCode){const e=document.getElementById("large-project-content");(e.style.display="block")&&(e.innerHTML="",e.style.display="none");const t=document.getElementById("emailModal");t.classList.contains("active")&&t.classList.remove("active")}}}}},{}],6:[function(e,t,n){const{mountClickAndEnterHandler:o,throttled:i}=e("./lib");t.exports={prepareEmailService:function(e,t,n){function r(){t.classList.toggle("active");let e=document.getElementById("contact-form");e.addEventListener("submit",(function(t){t.preventDefault();const n=document.getElementById("name"),o=document.getElementById("email"),i=document.getElementById("message"),r={name:n.value,email:o.value,message:i.value};function s(t){!function(e){const t=document.getElementById("email_status_message");t.classList.add(e.style),t.innerText=e.text,t.classList.remove("form__message-hidden")}({text:t?"Wysłano":"Błąd połączenia",style:t?"successStyle":"failureStyle"}),setTimeout((function(){document.getElementById("email_status_message").classList.add("form__message-hidden"),e.reset()}),3e3)}fetch("https://formspree.io/mnqgkkgg",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(r)}).then(e=>e.json()).then(e=>s(!0)).catch(e=>s(!1))}))}o(n,i((function(){t&&t.classList.toggle("active")}),300)),Array.prototype.forEach.call(e,e=>o(e,i(r,300)))}}},{"./lib":2}],7:[function(e,t,n){const{mountClickAndEnterHandler:o,throttled:i,reportError:r}=e("./lib");t.exports={prepareHamburgerMenu:function(e,t,n){try{if(!(e&&t&&n))throw new Error("can not open hamburger menu - missing or falsey arguments");toggleMenuVisibility=function(){t.classList.toggle("active"),n.classList.toggle("filled")},o(e,i(toggleMenuVisibility,300))}catch(e){r(e)}}}},{"./lib":2}],8:[function(e,t,n){const{mountClickAndEnterHandler:o,throttled:i,reportError:r}=e("./lib");t.exports={prepareProjectModals:function(e){try{let n=document.getElementsByClassName("project-pointer");function t(t){e.innerHTML=t.target.parentNode.innerHTML,e.removeChild(e.getElementsByClassName("project__name pointer")[0]),e.removeChild(e.getElementsByClassName("project__left-cover")[0]),e.removeChild(e.getElementsByClassName("project__right-cover")[0]),e.getElementsByClassName("initial")[0].classList.toggle("initial"),e.setAttribute("tabindex","-1");let n=document.getElementById("delete_icon").content.querySelector("div"),o=document.importNode(n,!0);o.addEventListener("click",(function t(){o.removeEventListener("click",t),e.innerHTML="",location.hash="",location.hash="projects",window.scrollBy(0,-document.getElementById("intro").clientHeight)})),e.appendChild(o),e.classList.add("large"),e.getElementsByClassName("project__image")[0].classList.add("large"),e.style.display="block",location.hash="large-project-content",window.scrollBy(0,-document.getElementById("intro").clientHeight)}Array.prototype.forEach.call(n,e=>o(e,i(t,300)))}catch(e){r(e)}}}},{"./lib":2}],9:[function(e,t,n){t.exports={prepareResizeSensor:function(e,t,n){function o(t){requestAnimationFrame((function(){e.style.marginTop=t.offsetHeight+"px"}))}t.classList.add("regular"),o(n),window.scrollTo({top:0,behavior:"smooth"}),"undefined"!=typeof ResizeSensor?setTimeout((function(){new ResizeSensor(t,(function(){o(t)}))}),5e3):window.alert("ResizeSensor nie jest dostępny")}}},{}],10:[function(e,t,n){t.exports={showInvisibleContent:function(){document.getElementById("heading").addEventListener("animationend",(function(){document.querySelectorAll("#informations, #skills, #projects, footer").forEach(e=>e.style.visibility="visible")}))}}},{}],11:[function(e,t,n){t.exports={throttle:function(e,t){let n,o,i=!1;return function r(){if(i)return n=arguments,void(o=this);e.apply(this,arguments),i=!0,setTimeout((function(){i=!1,n&&(r.apply(o,n),n=o=null)}),t)}}}},{}]},{},[3]);