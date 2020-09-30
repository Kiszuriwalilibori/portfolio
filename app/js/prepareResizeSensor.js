module.exports = {
  prepareResizeSensor: function prepareResizeSensor(informations, intro, heading) {
    intro.classList.add("regular");
    adjustInformationsMargin(heading);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (typeof ResizeSensor !== "undefined") {
      setTimeout(function () {
        new ResizeSensor(intro, function () {
          adjustInformationsMargin(intro);
        });
      }, 5000);
    } else {
      window.alert("ResizeSensor nie jest dostępny");
    }

    function adjustInformationsMargin(item) {
    
      informations.style.marginTop = item.offsetHeight + "px";
     
    }
  },
};
