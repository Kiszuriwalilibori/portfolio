const { mountClickAndEnterHandler, throttled } = require("./lib");
const { cookies } = require("./cookies");
const {cookieName, cookieValue} = require("./fixtures");
const { EmailStatusMessage_Class } = require("./emailStatusMessage");

module.exports = {
  prepareEmailService: function prepareEmailService(mountHooks, emailModal, iconDelete) {
    
    mountClickAndEnterHandler(iconDelete, throttled(toggleEmailModalVisibility, 300));
    
    function toggleEmailModalVisibility() {
      if (emailModal) {
        emailModal.classList.toggle("active");
      }
    }

    function sendEmail() {
      emailModal.classList.toggle("active");
      let form = document.getElementById("contact-form");
      let emailMessage = document.getElementById("email_status_message");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const emailSentRecently = !!cookies.get(cookieName);
         
        if(emailSentRecently){
          const handleResult = new EmailStatusMessage_Class(emailMessage);
          handleResult.handleStatus('warning');
          setTimeout(function () {
            handleResult.hide();
            form.reset();
          }, 3000);
          return;
        }

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        const content = {
          name: name.value,
          email: email.value,
          message: message.value,
        };

        //fetch("https://www.enformed.io/9kibv8hh/", {
        fetch("https://formspree.io/mnqgkkgg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(content),
        })
          .then(response => response.json())
          .then(data => handleResult(true))
          .catch(error => handleResult(false));

        function handleResult(alert,callback) {
          
          if (alert){
            cookies.set(cookieName, cookieValue, 1);
          }
          const handleResult = new EmailStatusMessage_Class(emailMessage);
          handleResult.handleStatus(alert);
          setTimeout(function () {
            handleResult.hide();
            form.reset();
          }, 3000);

        }
      });
    }

    Array.prototype.forEach.call(mountHooks, hook => mountClickAndEnterHandler(hook, throttled(sendEmail, 300)));
  },
};
