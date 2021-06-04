
  module.exports = {prepareServiceWorker:function prepareServiceWorker (){

    if ("serviceWorker" in navigator) {
      const prefix = location.pathname.replace(/\/(index\.html)?$/, "");
      navigator.serviceWorker.register(`${prefix}/sw.js`).then(
        function (registration) {
          console.log("[success] scope: ", registration.scope);
        },
        function (err) {
          console.log("[fail]: ", err);
        }
      );
    }
  

  } }
  
  