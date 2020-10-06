const { prepareEmailService } = require("./prepareEmailService.js");
const { prepareProjectModals } = require("./prepareProjectModals");
const { prepareResizeSensor } = require("./prepareResizeSensor");
const { prepareChangeLocation } = require("./prepareChangeLocation");
const { prepareHamburgerMenu } = require("./prepareHamburgerMenu");
const { defineImages }= require('./defineImages');
const { trans} = require ('./trans');

window.addEventListener('DOMContentLoaded', (event) => {
  defineImages();
  trans();
})

window.onload = function () {

  // const invisibles = document.querySelectorAll("#informations, #skills, #projects, footer");
  // invisibles.forEach(element => element.style.visibility ="visible");


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
  const body = document.getElementsByTagName('body')[0];
  const iconDeleteEmailModal = document.getElementById("emailModal-deleteIcon");

  if (!(informations && heading && intro && locationButtons && mailButtons && emailModal && hamburger && menu &&introUIAside && body && iconDeleteEmailModal)) {
    window.alert("Nie odnaleziono jednego lub więcej ważnych identyfikatorów. Strona nie będzie działać proawidłowo");
    return false;
  }
  



  // defineImages();
  prepareResizeSensor(informations, intro, heading);
  prepareChangeLocation(locationButtons);
  prepareProjectModals(projectModal);
  prepareEmailService(mailButtons, emailModal, iconDeleteEmailModal);
  prepareHamburgerMenu(hamburgerMenu, menu[0], introUIAside);


};
