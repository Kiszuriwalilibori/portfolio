

module.exports = {
  prepareResizeSensor: function prepareResizeSensor(informations, intro) {
    
    function adjustMargin(item) {
      informations.style.marginTop = item.offsetHeight + "px";
    }

    intro.classList.add("regular");
    adjustMargin(heading);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (typeof ResizeSensor !== "undefined") {
      setTimeout(function () {
        new ResizeSensor(intro, function () {
          adjustMargin(intro);
        });
      }, 5000);
    } else {
      window.alert("ResizeSensor nie jest dostępny");
    }
  },
};
