
const { mountClickAndEnterHandler, throttled } = require("./lib");
module.exports = {
  prepareChangeLocation: function prepareChangeLocation(buttons) {
    function changeLocation(ev) {
      if (ev.target.dataset.target) {
        const intro = document.getElementById("intro");
        window.location.hash = "";
        window.location.hash = ev.target.dataset.target;
        window.scrollBy(0, -intro.clientHeight);
      } else console.log("event location has not valid dataset");
    }

    Array.prototype.forEach.call(buttons, (button) => mountClickAndEnterHandler(button, throttled(changeLocation, 300)));
  },
};
