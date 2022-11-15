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

##### 1.1

- new delete icons, bug which caused that delete button worked on email modal only when modal was displayed for the first time fixed

### To do

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
