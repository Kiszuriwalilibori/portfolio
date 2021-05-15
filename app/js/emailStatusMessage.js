const {emailStyle, emailInnerText} = require("./fixtures");
module.exports = {
    EmailStatusMessage_Class: class EmailStatusMessage {
      constructor(node) {
        this.node = node;
        this.style = emailStyle;
        this.innerText = emailInnerText;
        this.handleStatus = this.handleStatus.bind(this);
      }

      hide(){
        this.node.classList.add("form__message-hidden");
      }
      handleStatus(status){

        switch(status) {
            case true:
              status ='success';
              break;
            case false:
              status = 'failure';
              break;
            default:
              status = status;
          } 
        this.node.classList.remove(...Object.values(this.style));

        this.node.classList.add(this.style[status]);
        this.node.innerText = this.innerText[status];
        this.node.classList.remove("form__message-hidden");
      }
    }
}