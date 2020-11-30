module.exports = {
  showInvisibleContent: function showInvisibleContent() {
    document.getElementById("heading-mask").addEventListener("animationend", showContent);
    function showContent() {
      const invisibles = document.querySelectorAll("#informations, #skills, #projects, footer");
      invisibles.forEach(element => (element.style.visibility = "visible"));
    }
  },
};
