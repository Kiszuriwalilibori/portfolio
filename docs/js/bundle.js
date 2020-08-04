!function e(t,n,o){function i(a,s){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(r)return r(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var d=n[a]={exports:{}};t[a][0].call(d.exports,(function(e){return i(t[a][1][e]||e)}),d,d.exports,e,t,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,t,n){const{prepareEmailService:o}=e("./prepareEmailService.js"),{prepareProjectModals:i}=e("./prepareProjectModals"),{prepareResizeSensor:r}=e("./prepareResizeSensor"),{prepareChangeLocation:a}=e("./prepareChangeLocation"),{prepareHamburgerMenu:s}=e("./prepareHamburgerMenu"),{prepareFooter:l}=e("./prepareFooter"),{throttle:c}=e("./throttle");window.onload=function(){const e=document.getElementById("intro"),t=document.getElementById("informations"),n=document.getElementById("heading"),c=document.getElementsByClassName("location-button"),d=document.getElementsByClassName("mail-button"),u=document.getElementById("emailModal"),p=document.getElementById("large-project-content"),m=document.getElementById("hamburger"),g=document.getElementsByTagName("nav"),f=document.getElementById("intro-ui-aside"),y=document.getElementsByTagName("body")[0];if(!(t&&n&&e&&c&&d&&u&&hamburger&&g&&f&&y))return window.alert("Nie odnaleziono jednego lub więcej ważnych identyfikatorów. Strona nie będzie działać proawidłowo"),!1;r(t,e),a(c),i(p),o(d,u),s(m,g[0],f),l(y)}},{"./prepareChangeLocation":2,"./prepareEmailService.js":3,"./prepareFooter":4,"./prepareHamburgerMenu":5,"./prepareProjectModals":6,"./prepareResizeSensor":7,"./throttle":8}],2:[function(e,t,n){t.exports={prepareChangeLocation:function(e){function t(e){e.target.dataset.target?(location.hash=e.target.dataset.target,window.scrollBy(0,-intro.clientHeight)):console.log("event location has not valid dataset")}t="undefined"!=typeof throttle?throttle(t,500):t,Array.prototype.forEach.call(e,e=>{e.addEventListener("click",t),e.addEventListener("keyup",(function(e){13===e.keyCode&&(e.preventDefault(),t(e))}))})}}},{}],3:[function(e,t,n){t.exports={prepareEmailService:function(e,t){function n(){function e(){t.classList.toggle("active")}e();const n=t.getElementsByClassName("icon-delete")[0];n&&n.addEventListener("click",e),document.getElementById("contact-form").addEventListener("submit",(function(e){e.preventDefault();const t=document.getElementById("name"),n=document.getElementById("email"),o=document.getElementById("message"),i={name:t.value,email:n.value,message:o.value};function r(e){let i={text:e?"Wysłano":"Błąd połączenia",style:e?"successStyle":"failureStyle"};!function(){const e=document.createElement("div");e.id="sentSuccess",e.innerText=i.text,e.classList.add(i.style);document.getElementById("status_message").appendChild(e)}(),setTimeout((function(){!function(){const e=document.getElementById("status_message"),i=document.getElementById("sentSuccess");e.removeChild(i),t.value="",o.value="",n.value=""}()}),3e3)}fetch("https://www.enformed.io/9kibv8hh/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(i)}).then(e=>e.json()).then(e=>r(!0)).catch(e=>r(!1))}))}Array.prototype.forEach.call(e,e=>{e.addEventListener("click",n),e.addEventListener("keyup",(function(e){13===e.keyCode&&(e.preventDefault(),n())}))})}}},{}],4:[function(e,t,n){t.exports={prepareFooter:function(e){const t=document.createElement("footer");t.classList.add("ui-footer"),t.innerHTML="<svg viewBox='0 0 500 150' preserveAspectRatio='none' style='height: 100%; width: 100%; position:absolute; bottom:0; left:0;'><path d= 'M0.27,1.47 C222.62,412.00 311.23,-263.98 499.72,150.48 L500.27,153.45 L0.00,150.00 Z' style='stroke: none;fill:#8083FF;'></path></svg><img class='gif gif-footer' src='../graphics/gifs/dancer.webp' alt='dancer' /><strong><p>Created by Piotr Maksymiuk | 2020. © Wszelkie prawa zastrzeżone</p></strong>",e.appendChild(t)}}},{}],5:[function(e,t,n){t.exports={prepareHamburgerMenu:function(e,t,n){e&&t&&n?(toggleMenuVisibility=function(){t.classList.toggle("active"),n.classList.toggle("filled")},toggleMenuVisibility="undefined"!=typeof throttle?throttle(toggleMenuVisibility,300):toggleMenuVisibility,e.addEventListener("click",toggleMenuVisibility),e.addEventListener("keyup",(function(e){13===e.keyCode&&(e.preventDefault(),toggleMenuVisibility())}))):console.log("can not open hamburger mnu - missing or falsey arguments")}}},{}],6:[function(e,t,n){t.exports={prepareProjectModals:function(e){let t=document.getElementsByClassName("project-pointer");function n(t){e.innerHTML=t.target.parentNode.innerHTML,e.removeChild(e.getElementsByClassName("project__name pointer")[0]),e.removeChild(e.getElementsByClassName("left-cover")[0]),e.removeChild(e.getElementsByClassName("right-cover")[0]),e.getElementsByClassName("initial")[0].classList.toggle("initial");const n=document.createElement("div");n.classList.add("icon-delete"),n.tabIndex=0,n.addEventListener("click",(function t(){n.removeEventListener("click",t),e.innerHTML=""})),e.appendChild(n),e.classList.add("large"),e.getElementsByClassName("project__image")[0].classList.add("large"),e.style.display="block",location.hash="large-project-content",window.scrollBy(0,-document.getElementById("intro").clientHeight)}n="undefined"!=typeof throttle?throttle(n,500):n,Array.prototype.forEach.call(t,e=>{e.addEventListener("click",n),e.addEventListener("keyup",(function(e){13===e.keyCode&&n(e)}))})}}},{}],7:[function(e,t,n){t.exports={prepareResizeSensor:function(e,t){function n(t){e.style.marginTop=t.offsetHeight+"px"}t.classList.add("regular"),n(heading),window.scrollTo({top:0,behavior:"smooth"}),"undefined"!=typeof ResizeSensor?setTimeout((function(){new ResizeSensor(t,(function(){n(t)}))}),5e3):window.alert("ResizeSensor nie jest dostępny")}}},{}],8:[function(e,t,n){t.exports={throttle:function(e,t){let n,o,i=!1;return function r(){if(i)return n=arguments,void(o=this);e.apply(this,arguments),i=!0,setTimeout((function(){i=!1,n&&(r.apply(o,n),n=o=null)}),t)}}}},{}]},{},[1]);