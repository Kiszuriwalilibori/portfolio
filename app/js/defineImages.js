module.exports = {
  defineImages: function defineImages() {

    customElements.define('author-name', class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({
          mode: 'open'
        });

        this.shadowRoot.innerHTML = `
    <style>
    span{
      font-family: "Oxygen", sans-serif;
      font-size: calc(16px + 32 * ((100vw - 320px) / 1080));
      color: #FB6542;
    }
    @media (max-width: 700px) {span {font-size:3rem;}}
    @media (max-width: 508px) {span {font-size:2rem;}}
  }
    }
  </style>
  <span>Piotr Maksymiuk</span>`;
      }
    });























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

    const shadow = document.querySelector("#author_foto").attachShadow({
      mode: "open",
    });
    shadow.appendChild(document.querySelector("#author_foto_template").content);
  },













};