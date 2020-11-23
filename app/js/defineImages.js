module.exports = {
  defineImages: function defineImages() {

    customElements.define('author-name', class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({
          mode: 'open'
        });
        this.shadowRoot.appendChild(document.getElementById('author-name-template').content.cloneNode('true'));
  
      }
    });


    // customElements.define('header-mask', class extends HTMLElement {
    //   constructor() {
    //     super();
    //     this.attachShadow({
    //       mode: 'open'
    //     });
    //     this.shadowRoot.appendChild(document.getElementById('header-mask-template').content.cloneNode('true'));
  
    //   }
    // });





















    class violetGirl extends HTMLImageElement {
      constructor() {
        super();

        this.setAttribute("style", "width: 180px; margin: 0 auto;");
        this.setAttribute("alt", "violet girl");
        this.setAttribute("loading", "lazy");
        this.setAttribute("width", "180");
        this.setAttribute("height", "180");
        this.setAttribute("src", "./graphics/gifs/violet_girl.webp");
      }
    }

    if (this.customElements) {
      try {
        customElements.define("violet-girl", violetGirl, {
          extends: "img"
        });
      } catch (_) {
        document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\x2fscript>');
      }
    } else {
      document.write('<script src="//unpkg.com/document-register-element"><\x2fscript>');
    }

    class elephant extends HTMLImageElement {
      constructor() {
        super();

        this.setAttribute("style", "width: 200px; margin: 0 auto;");
        this.setAttribute("alt", "dancing elephant");
        this.setAttribute("loading", "lazy");
        this.setAttribute("width", "200");
        this.setAttribute("height", "200");
        this.setAttribute("src", "./graphics/gifs/elephant.webp");
      }
    }

    if (this.customElements) {
      try {
        customElements.define("dancing-elephant", elephant, {
          extends: "img"
        });
      } catch (_) {
        document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\x2fscript>');
      }
    } else {
      document.write('<script src="//unpkg.com/document-register-element"><\x2fscript>');
    }

    class boys extends HTMLImageElement {
      constructor() {
        super();

        this.setAttribute("style", "width: 180px; margin: 0 auto;");
        this.setAttribute("alt", "dancing boys");
        this.setAttribute("loading", "lazy");
        this.setAttribute("width", "180");
        this.setAttribute("height", "165");
        this.setAttribute("src", "./graphics/gifs/boys.webp");
      }
    }

    if (this.customElements) {
      try {
        customElements.define("dancing-boys", boys, {
          extends: "img"
        });
      } catch (_) {
        document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\x2fscript>');
      }
    } else {
      document.write('<script src="//unpkg.com/document-register-element"><\x2fscript>');
    }










    class nigga extends HTMLImageElement {
      constructor() {
        super();

        this.setAttribute("style", "width: 180px; margin: 0 auto; position: absolute; bottom:0; left:50%; z-index:2000;transform: translateX(-50%);-webkit-transform: translateX(-50%);");
        this.setAttribute("alt", "dancing nigga");
        this.setAttribute("src", "./graphics/gifs/dancer.webp");
      }
    }

    if (this.customElements) {
      try {
        customElements.define("dancing-nigga", nigga, {
          extends: "img"
        });
      } catch (_) {
        document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\x2fscript>');
      }
    } else {
      document.write('<script src="//unpkg.com/document-register-element"><\x2fscript>');
    }



    class blueGirl extends HTMLImageElement {
      constructor() {
        super();

        this.setAttribute("style", "opacity: 0%; animation: girl-intro 0.3s ease-in-out 4s forwards; float: left;");
        this.setAttribute("id", "girl");
        this.setAttribute("alt", "blue girl");
        this.setAttribute("loading", "lazy");
        this.setAttribute("width", "100");
        this.setAttribute("height", "204");
        this.setAttribute("src", "./graphics/gifs/blue_girl.webp");
      }
    }

    if (this.customElements) {
      try {
        customElements.define("blue-girl", blueGirl, {
          extends: "img"
        });
      } catch (_) {
        document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\x2fscript>');
      }
    } else {
      document.write('<script src="//unpkg.com/document-register-element"><\x2fscript>');
    }




    class redGirl extends HTMLImageElement {
      constructor() {
        super();

        this.setAttribute("style", "opacity: 0%; animation: girl-intro 0.3s ease-in-out 4s forwards;");
        
        this.setAttribute("alt", "red girl");
        this.setAttribute("loading", "lazy");
        this.setAttribute("width", "99");
        this.setAttribute("height", "201");
        this.setAttribute("src", "./graphics/gifs/red_girl.webp");
      }
    }

    if (this.customElements) {
      try {
        customElements.define("red-girl", redGirl, {
          extends: "img"
        });
      } catch (_) {
        document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\x2fscript>');
      }
    } else {
      document.write('<script src="//unpkg.com/document-register-element"><\x2fscript>');
    }











    class headerMask extends HTMLImageElement {
      constructor() {
        super();
        this.setAttribute("style", 
        "height: 100%; width: 100%; position: absolute; top: 0; right: 0; background-color: #fb6542; will-change: transform; will-change: opacity; -webkit-animation: heading-enter 2s cubic-bezier(.61,0,.2,1) 1s both,heading-color 2s ease-in-out 3s forwards; animation: heading-enter 2s cubic-bezier(.61,0,.2,1) 1s both,heading-color 2s ease-in-out 3s forwards;"
      );
    }
    }

    if (this.customElements) {
      try {
        customElements.define("header-mask", headerMask, {
          extends: "div"
        });
      } catch (_) {
        document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\x2fscript>');
      }
    } else {
      document.write('<script src="//unpkg.com/document-register-element"><\x2fscript>');
    }



























    const shadow = document.querySelector("#author_foto").attachShadow({
      mode: "open",
    });
    shadow.appendChild(document.querySelector("#author_foto_template").content);
  },

};