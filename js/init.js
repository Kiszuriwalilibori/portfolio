const { prepareEmailService } = require("./prepareEmailService.js");
const { prepareProjectModals } = require("./prepareProjectModals");
const { prepareResizeSensor } = require("./prepareResizeSensor");
const { prepareChangeLocation } = require("./prepareChangeLocation");
const { throttle } = require("./throttle");

window.onload = function () {
  // variables
  const intro = document.getElementById("intro");
  const informations = document.getElementById("informations");
  const heading = document.getElementById("heading");
  const locationButtons = document.getElementsByClassName("location-button");
  const mailButtons = document.getElementsByClassName("mail-button");
  const emailModal = document.getElementById("emailModal");
  const projectModal = document.getElementById("large-project-content");
  
  if (
    !(
      informations &&
      heading &&
      intro &&
      locationButtons &&
      mailButtons &&
      emailModal
    )
  ) {
    window.alert(
      "Nie odnaleziono jednego lub więcej ważnych identyfikatorów. Strona nie będzie działać proawidłowo"
    );
    return false;
  }

  prepareResizeSensor(informations, intro);
  prepareChangeLocation(locationButtons);
  prepareProjectModals(projectModal);
  prepareEmailService(mailButtons, emailModal);
};
