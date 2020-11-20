const { mountClickAndEnterHandler, throttled, reportError } = require("./lib");
module.exports = {
  prepareChangeLocation: function prepareChangeLocation(buttons) {
    function changeLocation(ev) {
      
        if (ev.target.dataset.target) {  
        const intro = document.getElementById("intro");
        window.location.hash = "";
        window.location.hash = ev.target.dataset.target;
        window.scrollBy(0, -intro.clientHeight);
        }
    }

  

    const body = document.querySelector('body');
    
    body && mountClickAndEnterHandler(body, throttled(changeLocation, 300));


  }
};


