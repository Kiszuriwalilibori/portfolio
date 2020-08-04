module.exports = {
  prepareChangeLocation: function prepareChangeLocation(buttons) {
    function change_location(ev) {
      if (ev.target.dataset.target) {
        location.hash = ev.target.dataset.target;
        window.scrollBy(0, -intro.clientHeight);
      } else console.log("event location has not valid dataset");
    }

    change_location = typeof throttle !== "undefined" ? throttle(change_location, 500) : change_location;

    Array.prototype.forEach.call(buttons, (button) => {
      button.addEventListener("click", change_location);
      button.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          change_location(event);
        }
      });
    });
  },
};
