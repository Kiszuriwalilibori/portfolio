const { mountClickAndEnterHandler, throttled } = require("./lib");
const { cookies } = require("./cookies");
const { cookieName, cookieValue } = require("./fixtures");
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
        const handleResult = new EmailStatusMessage_Class(emailMessage,form);
        
        if (emailSentRecently) {
          handleResult.handleStatus("warning");
          setTimeout(function () {
            handleResult.hide();
            handleResult.reset();
          }, 3000);
          return;
        }

        var formContent = {};
        formData = new FormData(form);
        for (var pair of formData.entries()) {
          formContent[pair[0]] = pair[1];
        }

        //fetch("https://www.enformed.io/9kibv8hh/", { stary endpoint
        fetch("https://formspree.io/mnqgkkgg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formContent),
        })
          .then(response => response.json())
          .then(data => processResult(true))
          .catch(error => processResult(false));

        function processResult(alert) {
          if (alert) {
            cookies.set(cookieName, cookieValue, 1);
          }
         
          handleResult.handleStatus(alert);
          setTimeout(function () {
            handleResult.hide();
            handleResult.reset();
          }, 3000);
        }
      });
    }

    Array.prototype.forEach.call(mountHooks, hook => mountClickAndEnterHandler(hook, throttled(sendEmail, 300)));
  },
};
