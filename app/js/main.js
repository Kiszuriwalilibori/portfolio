const { prepareEmailService } = require("./prepareEmailService.js");
const { prepareProjectModals } = require("./prepareProjectModals");
const { prepareResizeSensor } = require("./prepareResizeSensor");
const { prepareChangeLocation } = require("./prepareChangeLocation");
const { prepareHamburgerMenu } = require("./prepareHamburgerMenu");
const { defineImages }= require('./defineImages');
const { prepareCloseModalsWithEscape } = require('./prepareCloseModalsWithEscape');
const { showInvisibleContent} = require ('./showInvisibleContent');
var lozad = require('lozad');

window.addEventListener('DOMContentLoaded', (event) => {
  defineImages();
  showInvisibleContent();

  const observer = lozad(); // lazy loads elements with default selector as ".lozad"
  observer.observe();



})

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
  const body = document.getElementsByTagName('body')[0];
  const iconDeleteEmailModal = document.getElementById("emailModal-deleteIcon");

  
  prepareResizeSensor(informations, intro, heading);
  prepareChangeLocation(locationButtons);
  prepareProjectModals(projectModal);
  prepareEmailService(mailButtons, emailModal, iconDeleteEmailModal);
  prepareHamburgerMenu(hamburgerMenu, menu[0], introUIAside);
  prepareCloseModalsWithEscape();

};
