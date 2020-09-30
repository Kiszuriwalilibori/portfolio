const { mountClickAndEnterHandler, throttled } = require("./lib");

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

      form.addEventListener("submit", function (e) {
        e.preventDefault();
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

        function handleResult(alert) {
          let result = {
            text: alert ? "Wysłano" : "Błąd połączenia",
            style: alert ? "successStyle" : "failureStyle",
          };

          showEmailMessage(result);
          setTimeout(function () {
            hideEmailMessage();
          }, 3000);

          function showEmailMessage(result) {
            const message = document.getElementById("email_status_message");
            message.classList.add(result.style);
            message.innerText = result.text;
            message.classList.remove("form__message-hidden");
          }
          function hideEmailMessage() {
            const message = document.getElementById("email_status_message");
            message.classList.add("form__message-hidden");
            form.reset();
          }
        }
      });
    }
    Array.prototype.forEach.call(mountHooks, hook => mountClickAndEnterHandler(hook, throttled(sendEmail, 300)));
  },
};
