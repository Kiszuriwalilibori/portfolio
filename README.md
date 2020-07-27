
# The objective

  - primary: present my projects
  - secondary: present my skills


## Technologies

 - SASS/SCSS
 - JS
 

## Installation
- 
- That site is hosted on GH Pages

## Browser Support

- Not for IE <10 and Opera Mini

## Versions
##### 1 
- initial


### To do
powinno mieć obsługę zdzrzenia kliknięcia enter na wsyztsko skoro jest klikalne klawiaturą
może bardziej wyraziste nazwy portfoliów w sensie większy tekst itp
fallback dla lazy loading native
render ścieżi krytycznej poprawić

https://web.dev/en/replace-gifs-with-videos/ albo tak

https://web.dev/en/native-lazy-loading/

How do I handle browsers that don't yet support native lazy-loading? #

Create a polyfill or use a third-party library to lazy-load images on your site. The loading property can be used to detect if the feature is supported in the browser:

if ('loading' in HTMLImageElement.prototype) {
  // supported in browser
} else {
  // fetch polyfill/third-party library
}




JS



In here, someFunction uses a module imported from a particular library. If this module is not being used elsewhere, the code block can be modified to use a dynamic import to fetch it only when the form is submitted by the user.

form.addEventListener("submit", e => {
  e.preventDefault();
  import('library.moduleA')
    .then(module => module.default) // using the default export
    .then(someFunction())
    .catch(handleError());
});

const someFunction = () => {
    // uses moduleA
}
część kodu przyjmuje klawisz enter częsc nie, ujednolicić i dać jakiś focus widoczny na przetabowanie
browserify init.js -o bundle.js