!function e(t,n,i){function o(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(r)return r(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[s]={exports:{}};t[s][0].call(u.exports,(function(e){return o(t[s][1][e]||e)}),u,u.exports,e,t,n,i)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(e,t,n){t.exports={defineImages:function(){customElements.define("author-name",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(document.getElementById("author-name-template").content.cloneNode("true"))}});class e extends HTMLImageElement{constructor(){super(),this.setAttribute("style","width: 180px; margin: 0 auto;"),this.setAttribute("alt","violet girl"),this.setAttribute("loading","lazy"),this.setAttribute("width","180"),this.setAttribute("height","180"),this.setAttribute("src","./graphics/gifs/violet_girl.webp")}}if(this.customElements)try{customElements.define("violet-girl",e,{extends:"img"})}catch(e){document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\/script>')}else document.write('<script src="//unpkg.com/document-register-element"><\/script>');class t extends HTMLImageElement{constructor(){super(),this.setAttribute("style","width: 200px; margin: 0 auto;"),this.setAttribute("alt","dancing elephant"),this.setAttribute("loading","lazy"),this.setAttribute("width","200"),this.setAttribute("height","200"),this.setAttribute("src","./graphics/gifs/elephant.webp")}}if(this.customElements)try{customElements.define("dancing-elephant",t,{extends:"img"})}catch(e){document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\/script>')}else document.write('<script src="//unpkg.com/document-register-element"><\/script>');class n extends HTMLImageElement{constructor(){super(),this.setAttribute("style","width: 180px; margin: 0 auto;"),this.setAttribute("alt","dancing boys"),this.setAttribute("loading","lazy"),this.setAttribute("width","180"),this.setAttribute("height","165"),this.setAttribute("src","./graphics/gifs/boys.webp")}}if(this.customElements)try{customElements.define("dancing-boys",n,{extends:"img"})}catch(e){document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\/script>')}else document.write('<script src="//unpkg.com/document-register-element"><\/script>');class i extends HTMLImageElement{constructor(){super(),this.setAttribute("style","width: 180px; margin: 0 auto; position: absolute; bottom:0; left:50%; z-index:2000;transform: translateX(-50%);-webkit-transform: translateX(-50%);"),this.setAttribute("alt","dancing nigga"),this.setAttribute("src","./graphics/gifs/dancer.webp")}}if(this.customElements)try{customElements.define("dancing-nigga",i,{extends:"img"})}catch(e){document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\/script>')}else document.write('<script src="//unpkg.com/document-register-element"><\/script>');class o extends HTMLImageElement{constructor(){super(),this.setAttribute("style","opacity: 0%; animation: girl-intro 0.3s ease-in-out 4s forwards; float: left;"),this.setAttribute("id","girl"),this.setAttribute("alt","blue girl"),this.setAttribute("loading","lazy"),this.setAttribute("width","100"),this.setAttribute("height","204"),this.setAttribute("src","./graphics/gifs/blue_girl.webp")}}if(this.customElements)try{customElements.define("blue-girl",o,{extends:"img"})}catch(e){document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\/script>')}else document.write('<script src="//unpkg.com/document-register-element"><\/script>');class r extends HTMLImageElement{constructor(){super(),this.setAttribute("style","opacity: 0%; animation: girl-intro 0.3s ease-in-out 4s forwards; @keyframes girl-intro {from {opacity: 0%;}to { opacity: 100%; }}"),this.setAttribute("alt","red girl"),this.setAttribute("loading","lazy"),this.setAttribute("width","99"),this.setAttribute("height","201"),this.setAttribute("src","./graphics/gifs/red_girl.webp")}}if(this.customElements)try{customElements.define("red-girl",r,{extends:"img"})}catch(e){document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\/script>')}else document.write('<script src="//unpkg.com/document-register-element"><\/script>');class s extends HTMLImageElement{constructor(){super(),this.setAttribute("style","height: 100%; width: 100%; position: absolute; top: 0; right: 0; background-color: #fb6542; will-change: transform; will-change: opacity; -webkit-animation: heading-enter 2s cubic-bezier(.61,0,.2,1) 1s both,heading-color 2s ease-in-out 3s forwards; animation: heading-enter 2s cubic-bezier(.61,0,.2,1) 1s both,heading-color 2s ease-in-out 3s forwards;")}}if(this.customElements)try{customElements.define("header-mask",s,{extends:"div"})}catch(e){document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\/script>')}else document.write('<script src="//unpkg.com/document-register-element"><\/script>');document.querySelector("#author_foto").attachShadow({mode:"open"}).appendChild(document.querySelector("#author_foto_template").content)}}},{}],2:[function(e,t,n){const{throttle:i}=e("./throttle");function o(e){return"object"==typeof Node?e instanceof Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName}function r(e){try{if(!e instanceof Error)throw new Error("it is not error object");console.error(e.name,"\n","\n",e.message,"\n","\n",e.stack)}catch(e){console.log(e.message)}}t.exports={isNode:o,reportError:r,getAttributeValue:function(e,t){const n=document.getElementById(e);if(n){const e=n.currentStyle||window.getComputedStyle(n);return e[t]?parseInt(e[t],10):0}return 0},mountClickAndEnterHandler:function(e,t){try{if(!o(e))throw new Error("item is not a node");if(n=t,"[object Function]"!=Object.prototype.toString.call(n))throw new Error("fn is not a function");if(!e||!document.body.contains(e))throw new Error("item is not a HTML node within document body");e.addEventListener("click",t),e.addEventListener("keyup",(function(e){13===e.keyCode&&(e.preventDefault(),t(e))})),"BUTTON"===e.toUpperCase||e.hasAttribute("tabindex")||e.setAttribute("tabindex","0")}catch(e){r(e)}var n},throttled:function(e,t){return void 0!==i?i(e,t):i}}},{"./throttle":11}],3:[function(e,t,n){const{prepareEmailService:i}=e("./prepareEmailService.js"),{prepareProjectModals:o}=e("./prepareProjectModals"),{prepareResizeSensor:r}=e("./prepareResizeSensor"),{prepareChangeLocation:s}=e("./prepareChangeLocation"),{prepareHamburgerMenuNew:a}=e("./prepareHamburgerMenuNew"),{defineImages:c}=e("./defineImages"),{prepareCloseModalsWithEscape:l}=e("./prepareCloseModalsWithEscape"),{showInvisibleContent:u}=e("./showInvisibleContent");var d=e("lozad");window.addEventListener("DOMContentLoaded",e=>{c(),u();d().observe()}),window.onload=function(){const e=document.getElementById("intro"),t=document.getElementById("informations"),n=document.getElementById("heading"),c=document.getElementsByClassName("location-button"),u=document.getElementsByClassName("mail-button"),d=document.getElementById("emailModal"),m=document.getElementById("large-project-content"),g=document.getElementById("hamburger"),p=(document.getElementsByTagName("nav"),document.getElementById("intro-ui-aside"),document.getElementsByTagName("body")[0],document.getElementById("emailModal-deleteIcon")),h=document.querySelector(".mobile-menu");if(r(t,e,n),s(c),o(m),i(u,d,p),a(g,h),l(),"serviceWorker"in navigator){const e=location.pathname.replace(/\/(index\.html)?$/,"");navigator.serviceWorker.register(e+"/sw.js").then((function(e){console.log("[success] scope: ",e.scope)}),(function(e){console.log("[fail]: ",e)}))}}},{"./defineImages":1,"./prepareChangeLocation":4,"./prepareCloseModalsWithEscape":5,"./prepareEmailService.js":6,"./prepareHamburgerMenuNew":7,"./prepareProjectModals":8,"./prepareResizeSensor":9,"./showInvisibleContent":10,lozad:12}],4:[function(e,t,n){const{mountClickAndEnterHandler:i,throttled:o,reportError:r}=e("./lib");t.exports={prepareChangeLocation:function(e){const t=document.querySelector("body");t&&i(t,o((function(e){if(e.target.dataset.target){const t=document.getElementById("intro");window.location.hash="",window.location.hash=e.target.dataset.target,window.scrollBy(0,-t.clientHeight)}}),300))}}},{"./lib":2}],5:[function(e,t,n){t.exports={prepareCloseModalsWithEscape:function(){document.onkeydown=function(e){if("key"in(e=e||window.event)?"Escape"===e.key||"Esc"===e.key:27===e.keyCode){const e=document.getElementById("large-project-content");(e.style.display="block")&&(e.innerHTML="",e.style.display="none");const t=document.getElementById("emailModal");t.classList.contains("active")&&t.classList.remove("active")}}}}},{}],6:[function(e,t,n){const{mountClickAndEnterHandler:i,throttled:o}=e("./lib");t.exports={prepareEmailService:function(e,t,n){function r(){t.classList.toggle("active");let e=document.getElementById("contact-form");e.addEventListener("submit",(function(t){t.preventDefault();const n=document.getElementById("name"),i=document.getElementById("email"),o=document.getElementById("message"),r={name:n.value,email:i.value,message:o.value};function s(t){!function(e){const t=document.getElementById("email_status_message");t.classList.add(e.style),t.innerText=e.text,t.classList.remove("form__message-hidden")}({text:t?"Wysłano":"Błąd połączenia",style:t?"successStyle":"failureStyle"}),setTimeout((function(){document.getElementById("email_status_message").classList.add("form__message-hidden"),e.reset()}),3e3)}fetch("https://formspree.io/mnqgkkgg",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(r)}).then(e=>e.json()).then(e=>s(!0)).catch(e=>s(!1))}))}i(n,o((function(){t&&t.classList.toggle("active")}),300)),Array.prototype.forEach.call(e,e=>i(e,o(r,300)))}}},{"./lib":2}],7:[function(e,t,n){const{mountClickAndEnterHandler:i,throttled:o}=e("./lib");t.exports={prepareHamburgerMenuNew:function(e,t){try{if(!e||!t)throw new Error("can not open hamburger menu - missing or falsey arguments");toggleClassMenuMobile=function(){t.classList.add("mobile-menu--animatable"),t.classList.contains("mobile-menu--visible")?t.classList.remove("mobile-menu--visible"):t.classList.add("mobile-menu--visible")},OnTransitionEndMenuMobile=function(){t.classList.remove("mobile-menu--animatable")},t.addEventListener("transitionend",OnTransitionEndMenuMobile,!1),i(e,o(toggleClassMenuMobile,300)),i(t,o(toggleClassMenuMobile,300))}catch(e){console.log(e)}}}},{"./lib":2}],8:[function(e,t,n){const{mountClickAndEnterHandler:i,throttled:o,reportError:r}=e("./lib");t.exports={prepareProjectModals:function(e){try{let n=document.getElementsByClassName("project-pointer");function t(t){e.innerHTML=t.target.parentNode.innerHTML,e.removeChild(e.getElementsByClassName("project__name pointer")[0]),e.removeChild(e.getElementsByClassName("project__left-cover")[0]),e.removeChild(e.getElementsByClassName("project__right-cover")[0]),e.getElementsByClassName("initial")[0].classList.toggle("initial");let n=document.getElementById("delete_icon").content.querySelector("div"),i=document.importNode(n,!0);i.addEventListener("click",(function t(){i.removeEventListener("click",t),e.innerHTML="",location.hash="",location.hash="projects",window.scrollBy(0,-document.getElementById("intro").clientHeight)})),e.appendChild(i),e.classList.add("large"),e.getElementsByClassName("project__image")[0].classList.add("large"),e.style.display="block",location.hash="large-project-content",window.scrollBy(0,-document.getElementById("intro").clientHeight)}Array.prototype.forEach.call(n,e=>i(e,o(t,300)))}catch(e){r(e)}}}},{"./lib":2}],9:[function(e,t,n){t.exports={prepareResizeSensor:function(e,t,n){function i(t){requestAnimationFrame((function(){e.style.marginTop=t.offsetHeight+"px"}))}t.classList.add("regular"),i(n),window.scrollTo({top:0,behavior:"smooth"}),"undefined"!=typeof ResizeSensor?setTimeout((function(){new ResizeSensor(t,(function(){i(t)}))}),5e3):window.alert("ResizeSensor nie jest dostępny")}}},{}],10:[function(e,t,n){t.exports={showInvisibleContent:function(){document.getElementById("heading-mask").addEventListener("animationend",(function(){document.querySelectorAll("#informations, #skills, #projects, footer").forEach(e=>e.style.visibility="visible")}))}}},{}],11:[function(e,t,n){t.exports={throttle:function(e,t){let n,i,o=!1;return function r(){if(o)return n=arguments,void(i=this);e.apply(this,arguments),o=!0,setTimeout((function(){o=!1,n&&(r.apply(i,n),n=i=null)}),t)}}}},{}],12:[function(e,t,n){var i,o;i=this,o=function(){"use strict";var e="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var n=t.querySelector("img"),i=!1;null===n&&(n=document.createElement("img"),i=!0),e&&t.getAttribute("data-iesrc")&&(n.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(n.alt=t.getAttribute("data-alt")),i&&t.append(n)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var o=t.children,r=void 0,s=0;s<=o.length-1;s++)(r=o[s].getAttribute("data-src"))&&(o[s].src=r);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var a=",";if(t.getAttribute("data-background-delimiter")&&(a=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(a).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var c=t.getAttribute("data-background-image-set").split(a),l=c[0].substr(0,c[0].indexOf(" "))||c[0];l=-1===l.indexOf("url(")?"url("+l+")":l,1===c.length?t.style.backgroundImage=l:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+l+"; background-image: -webkit-image-set("+c+"); background-image: image-set("+c+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function n(e){e.setAttribute("data-loaded",!0)}var i=function(e){return"true"===e.getAttribute("data-loaded")},o=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return e instanceof Element?[e]:e instanceof NodeList?e:t.querySelectorAll(e)};return function(){var e,r,s=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=Object.assign({},t,a),l=c.root,u=c.rootMargin,d=c.threshold,m=c.load,g=c.loaded,p=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(p=new IntersectionObserver((e=m,r=g,function(t,o){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(o.unobserve(t.target),i(t.target)||(e(t.target),n(t.target),r(t.target)))}))}),{root:l,rootMargin:u,threshold:d}));for(var h,b=o(s,l),f=0;f<b.length;f++)(h=b[f]).getAttribute("data-placeholder-background")&&(h.style.background=h.getAttribute("data-placeholder-background"));return{observe:function(){for(var e=o(s,l),t=0;t<e.length;t++)i(e[t])||(p?p.observe(e[t]):(m(e[t]),n(e[t]),g(e[t])))},triggerLoad:function(e){i(e)||(m(e),n(e),g(e))},observer:p}}},"object"==typeof n&&void 0!==t?t.exports=o():"function"==typeof define&&define.amd?define(o):i.lozad=o()},{}]},{},[3]);