!function e(t,n,r){function o(s,c){if(!n[s]){if(!t[s]){var a="function"==typeof require&&require;if(!c&&a)return a(s,!0);if(i)return i(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[s]={exports:{}};t[s][0].call(u.exports,(function(e){return o(t[s][1][e]||e)}),u,u.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){t.exports={defineImages:function(){class e extends HTMLImageElement{constructor(){super(),this.setAttribute("style","width: 180px; margin: 0 auto;"),this.setAttribute("alt","violet girl"),this.setAttribute("loading","lazy"),this.setAttribute("width","180"),this.setAttribute("height","180"),this.setAttribute("src","./graphics/gifs/violet_girl.webp")}}if(this.customElements)try{customElements.define("violet-girl",e,{extends:"img"})}catch(e){document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\/script>')}else document.write('<script src="//unpkg.com/document-register-element"><\/script>');class t extends HTMLImageElement{constructor(){super(),this.setAttribute("style","width: 200px; margin: 0 auto;"),this.setAttribute("alt","dancing elephant"),this.setAttribute("loading","lazy"),this.setAttribute("width","200"),this.setAttribute("height","200"),this.setAttribute("src","./graphics/gifs/elephant.webp")}}if(this.customElements)try{customElements.define("dancing-elephant",t,{extends:"img"})}catch(e){document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\/script>')}else document.write('<script src="//unpkg.com/document-register-element"><\/script>');class n extends HTMLImageElement{constructor(){super(),this.setAttribute("style","width: 180px; margin: 0 auto;"),this.setAttribute("alt","dancing boys"),this.setAttribute("loading","lazy"),this.setAttribute("width","180"),this.setAttribute("height","165"),this.setAttribute("src","./graphics/gifs/boys.webp")}}if(this.customElements)try{customElements.define("dancing-boys",n,{extends:"img"})}catch(e){document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\/script>')}else document.write('<script src="//unpkg.com/document-register-element"><\/script>');class r extends HTMLImageElement{constructor(){super(),this.setAttribute("style","width: 180px; margin: 0 auto; position: absolute; bottom:0; left:50%; z-index:2000;transform: translateX(-50%);-webkit-transform: translateX(-50%);"),this.setAttribute("alt","dancing nigga"),this.setAttribute("src","./graphics/gifs/dancer.webp")}}if(this.customElements)try{customElements.define("dancing-nigga",r,{extends:"img"})}catch(e){document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\/script>')}else document.write('<script src="//unpkg.com/document-register-element"><\/script>')}}},{}],2:[function(e,t,n){const{throttle:r}=e("./throttle");function o(e){return"object"==typeof Node?e instanceof Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName}function i(e){try{if(!e instanceof Error)throw new Error("it is not error object");console.error(e.name,"\n","\n",e.message,"\n","\n",e.stack)}catch(e){console.log(e.message)}}t.exports={isNode:o,reportError:i,getAttributeValue:function(e,t){const n=document.getElementById(e);if(n){const e=n.currentStyle||window.getComputedStyle(n);return e[t]?parseInt(e[t],10):0}return 0},mountClickAndEnterHandler:function(e,t){try{if(!o(e))throw new Error("item is not a node");if(n=t,"[object Function]"!=Object.prototype.toString.call(n))throw new Error("fn is not a function");if(!e||!document.body.contains(e))throw new Error("item is not a HTML node within document body");e.addEventListener("click",t),e.addEventListener("keyup",(function(e){13===e.keyCode&&(e.preventDefault(),t(e))})),"BUTTON"===e.toUpperCase||e.hasAttribute("tabindex")||e.setAttribute("tabindex","0")}catch(e){i(e)}var n},throttled:function(e,t){return void 0!==r?r(e,t):r}}},{"./throttle":9}],3:[function(e,t,n){const{prepareEmailService:r}=e("./prepareEmailService.js"),{prepareProjectModals:o}=e("./prepareProjectModals"),{prepareResizeSensor:i}=e("./prepareResizeSensor"),{prepareChangeLocation:s}=e("./prepareChangeLocation"),{prepareHamburgerMenu:c}=e("./prepareHamburgerMenu"),{defineImages:a}=e("./defineImages");window.onload=function(){document.querySelectorAll("#informations, #skills, #projects, footer").forEach(e=>e.style.visibility="visible");const e=document.getElementById("intro"),t=document.getElementById("informations"),n=document.getElementById("heading"),l=document.getElementsByClassName("location-button"),u=document.getElementsByClassName("mail-button"),m=document.getElementById("emailModal"),d=document.getElementById("large-project-content"),p=document.getElementById("hamburger"),g=document.getElementsByTagName("nav"),h=document.getElementById("intro-ui-aside"),f=document.getElementsByTagName("body")[0],y=document.getElementById("emailModal-deleteIcon");if(!(t&&n&&e&&l&&u&&m&&hamburger&&g&&h&&f&&y))return window.alert("Nie odnaleziono jednego lub więcej ważnych identyfikatorów. Strona nie będzie działać proawidłowo"),!1;a(),i(t,e,n),s(l),o(d),r(u,m,y),c(p,g[0],h)}},{"./defineImages":1,"./prepareChangeLocation":4,"./prepareEmailService.js":5,"./prepareHamburgerMenu":6,"./prepareProjectModals":7,"./prepareResizeSensor":8}],4:[function(e,t,n){const{mountClickAndEnterHandler:r,throttled:o,reportError:i}=e("./lib");t.exports={prepareChangeLocation:function(e){function t(e){try{if(!e.target.dataset.target)throw new Error("event location has not valid dataset");const t=document.getElementById("intro");window.location.hash="",window.location.hash=e.target.dataset.target,window.scrollBy(0,-t.clientHeight)}catch(e){i(e)}}Array.prototype.forEach.call(e,e=>r(e,o(t,300)))}}},{"./lib":2}],5:[function(e,t,n){const{mountClickAndEnterHandler:r,throttled:o}=e("./lib");t.exports={prepareEmailService:function(e,t,n){function i(){t.classList.toggle("active");let e=document.getElementById("contact-form");e.addEventListener("submit",(function(t){t.preventDefault();const n=document.getElementById("name"),r=document.getElementById("email"),o=document.getElementById("message"),i={name:n.value,email:r.value,message:o.value};function s(t){!function(e){const t=document.getElementById("email_status_message");t.classList.add(e.style),t.innerText=e.text,t.classList.remove("form__message-hidden")}({text:t?"Wysłano":"Błąd połączenia",style:t?"successStyle":"failureStyle"}),setTimeout((function(){document.getElementById("email_status_message").classList.add("form__message-hidden"),e.reset()}),3e3)}fetch("https://formspree.io/mnqgkkgg",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(i)}).then(e=>e.json()).then(e=>s(!0)).catch(e=>s(!1))}))}r(n,o((function(){t&&t.classList.toggle("active")}),300)),Array.prototype.forEach.call(e,e=>r(e,o(i,300)))}}},{"./lib":2}],6:[function(e,t,n){const{mountClickAndEnterHandler:r,throttled:o,reportError:i}=e("./lib");t.exports={prepareHamburgerMenu:function(e,t,n){try{if(!(e&&t&&n))throw new Error("can not open hamburger menu - missing or falsey arguments");toggleMenuVisibility=function(){t.classList.toggle("active"),n.classList.toggle("filled")},r(e,o(toggleMenuVisibility,300))}catch(e){i(e)}}}},{"./lib":2}],7:[function(e,t,n){const{mountClickAndEnterHandler:r,throttled:o,reportError:i}=e("./lib");t.exports={prepareProjectModals:function(e){try{let n=document.getElementsByClassName("project-pointer");function t(t){e.innerHTML=t.target.parentNode.innerHTML,e.removeChild(e.getElementsByClassName("project__name pointer")[0]),e.removeChild(e.getElementsByClassName("project__left-cover")[0]),e.removeChild(e.getElementsByClassName("project__right-cover")[0]),e.getElementsByClassName("initial")[0].classList.toggle("initial");let n=document.getElementById("delete_icon").content.querySelector("div"),r=document.importNode(n,!0);r.addEventListener("click",(function t(){r.removeEventListener("click",t),e.innerHTML="",location.hash="",location.hash="projects",window.scrollBy(0,-document.getElementById("intro").clientHeight)})),e.appendChild(r),e.classList.add("large"),e.getElementsByClassName("project__image")[0].classList.add("large"),e.style.display="block",location.hash="large-project-content",window.scrollBy(0,-document.getElementById("intro").clientHeight)}Array.prototype.forEach.call(n,e=>r(e,o(t,300)))}catch(e){i(e)}}}},{"./lib":2}],8:[function(e,t,n){t.exports={prepareResizeSensor:function(e,t,n){function r(t){e.style.marginTop=t.offsetHeight+"px"}t.classList.add("regular"),r(n),window.scrollTo({top:0,behavior:"smooth"}),"undefined"!=typeof ResizeSensor?setTimeout((function(){new ResizeSensor(t,(function(){r(t)}))}),5e3):window.alert("ResizeSensor nie jest dostępny")}}},{}],9:[function(e,t,n){t.exports={throttle:function(e,t){let n,r,o=!1;return function i(){if(o)return n=arguments,void(r=this);e.apply(this,arguments),o=!0,setTimeout((function(){o=!1,n&&(i.apply(r,n),n=r=null)}),t)}}}},{}]},{},[3]);