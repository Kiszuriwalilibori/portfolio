const { prepareEmailService } = require("./prepareEmailService.js");
const { prepareProjectModals } = require("./prepareProjectModals");
const { prepareResizeSensor } = require("./prepareResizeSensor");
const { prepareChangeLocation } = require("./prepareChangeLocation");
const { prepareHamburgerMenu } = require("./prepareHamburgerMenu");
const { prepareFooter }= require('./prepareFooter');
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
  const body =document.getElementsByTagName('body')[0];

  if (!(informations && heading && intro && locationButtons && mailButtons && emailModal && hamburger && menu &&introUIAside && body)) {
    window.alert("Nie odnaleziono jednego lub więcej ważnych identyfikatorów. Strona nie będzie działać proawidłowo");
    return false;
  }
  
  prepareResizeSensor(informations, intro);
  prepareChangeLocation(locationButtons);
  prepareProjectModals(projectModal);
  prepareEmailService(mailButtons, emailModal);
  prepareHamburgerMenu(hamburgerMenu, menu[0], introUIAside);
  prepareFooter(body);
};
