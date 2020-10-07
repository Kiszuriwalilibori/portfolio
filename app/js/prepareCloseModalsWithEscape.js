module.exports = {
  prepareCloseModalsWithEscape: function prepareCloseModalsWithEscape() {
    document.onkeydown = function (evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
        isEscape = evt.key === "Escape" || evt.key === "Esc";
      } else {
        isEscape = evt.keyCode === 27;
      }
      if (isEscape) {
        const project = document.getElementById('large-project-content');
        if (project.style.display ='block'){
            project.innerHTML = "";
            project.style.display = 'none';
        }
        const email = document.getElementById('emailModal');
        if(email.classList.contains('active')){
            email.classList.remove('active');
        }
      }
    };
  },
};
