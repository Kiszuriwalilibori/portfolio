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