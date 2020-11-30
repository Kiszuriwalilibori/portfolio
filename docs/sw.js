importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

//workbox.precaching.precacheAndRoute([{"revision":"0ef1ffa3ab7e106a409029438b6417ff","url":"favicon.ico"},{"revision":"52de4d182a2b8a1de7b26b7652e572a4","url":"fonts/oxygen/Oxygen-Bold.otf"},{"revision":"3ada7a9482cb9a123ad501e45053adb3","url":"fonts/oxygen/Oxygen-Bold.ttf"},{"revision":"4eed67f9078b31cb40715c0a1191f85c","url":"fonts/oxygen/oxygen-latin-bold.eot"},{"revision":"665b5fcefad09ff9cba5aaaf975181f8","url":"fonts/oxygen/oxygen-latin-bold.svg"},{"revision":"e092fb38117f687e8585dabee3f8c60f","url":"fonts/oxygen/oxygen-latin-bold.ttf"},{"revision":"92b3a0e011436c2d2a543c31f8843cb6","url":"fonts/oxygen/oxygen-latin-bold.woff"},{"revision":"dd761707e1e81dcb4efa8e8a456ad4dc","url":"fonts/oxygen/oxygen-latin-bold.woff2"},{"revision":"bc27d2afa36bddfffd9265ec5d250a21","url":"fonts/oxygen/oxygen-latin-regular.eot"},{"revision":"2dee332fa67d7465f231abc3c46847f4","url":"fonts/oxygen/oxygen-latin-regular.svg"},{"revision":"56f78cd6033c81fc57ea6636e952b8b2","url":"fonts/oxygen/oxygen-latin-regular.ttf"},{"revision":"3842127f0a92458b3a03f743b2fd3771","url":"fonts/oxygen/oxygen-latin-regular.woff"},{"revision":"f7239673613532e70eec6a882f878fb4","url":"fonts/oxygen/oxygen-latin-regular.woff2"},{"revision":"58e05c4c38f4595190a8c83f68b09337","url":"fonts/oxygen/Oxygen.otf"},{"revision":"56a31de4e721adf1089b00ddfad6f29c","url":"fonts/roboto/roboto-v20-latin-ext_latin-regular.eot"},{"revision":"8681f434273fd6a267b1a16a035c5f79","url":"fonts/roboto/roboto-v20-latin-ext_latin-regular.svg"},{"revision":"2cc6fa7410c7b7b6b79786f5792d73b8","url":"fonts/roboto/roboto-v20-latin-ext_latin-regular.ttf"},{"revision":"d679a90608a65cc9394f67448ca2094a","url":"fonts/roboto/roboto-v20-latin-ext_latin-regular.woff"},{"revision":"c5bf51b68dc9fd7fe944d8947fe12518","url":"fonts/roboto/roboto-v20-latin-ext_latin-regular.woff2"},{"revision":"0810ac07d0353f33172532f474d281c2","url":"graphics/author/foto2.png"},{"revision":"1591569804857743fa19382867fdfc20","url":"graphics/author/foto2.webp"},{"revision":"5558596ea766c1b66be74cea95e7a06f","url":"graphics/gifs/blue_girl.gif"},{"revision":"5e34e1f6414787c5445d2458b6dc0397","url":"graphics/gifs/blue_girl.webp"},{"revision":"91427118c6e9ac193e3797763cd3247b","url":"graphics/gifs/boys.gif"},{"revision":"b9cfb41c9c962f8fe07fb0cbc088e095","url":"graphics/gifs/boys.webp"},{"revision":"493090dc940836bd7c6f9a2a0b9b137c","url":"graphics/gifs/dancer.gif"},{"revision":"03e0c0e921bfc6c833e0c70ab57cc352","url":"graphics/gifs/dancer.webp"},{"revision":"5c74eef377f316e86e960bd2bf7486c5","url":"graphics/gifs/elephant.webp"},{"revision":"ec6f206f7e656144cb3193d992fa38e4","url":"graphics/gifs/red_girl.gif"},{"revision":"817f748af9a1badd58f09da9a2fe920c","url":"graphics/gifs/red_girl.webp"},{"revision":"9d3aef006fae6190191e1447c600cc6e","url":"graphics/gifs/source.gif"},{"revision":"6ae62573769f1f21e558775e38ea606d","url":"graphics/gifs/violet_girl.webp"},{"revision":"76231784ffd4c1558abdae7acaa0aa81","url":"graphics/gifs/violetgirl.gif"},{"revision":"4dd5dbb67a4f75b822e5b3dcf83e50b4","url":"graphics/icons/fb.png"},{"revision":"711bf7a09515d5d74aba078752aa56de","url":"graphics/icons/github.png"},{"revision":"2e626229b5a334713a6126d484dd17cd","url":"graphics/icons/hamburger.png"},{"revision":"d0f0130e5bfbf101c519bfdf3e366c1b","url":"graphics/icons/hamburger.webp"},{"revision":"d9d3241b0b3d8635cecc3803066213ec","url":"graphics/icons/list.svg"},{"revision":"466b78437206ac7bec07231006dbb8f5","url":"graphics/icons/mail.png"},{"revision":"0a016b42dbbd653c0ad34dc299abcee7","url":"graphics/project_images/Adnotacja 2020-07-08 224656.jpg"},{"revision":"5a3b4cb4f5b80c1393d04e59246e833b","url":"graphics/project_images/Adnotacja 2020-07-19 123054.jpg"},{"revision":"81f31e57a513d5761f94a9c40c204b26","url":"graphics/project_images/arch1.jpg"},{"revision":"bec1ec9d4cede15cee4c5826ea299599","url":"graphics/project_images/arch1.webp"},{"revision":"d71cc41d10003c39a82ca6abe6590aab","url":"graphics/project_images/arch2.jpg"},{"revision":"54750423015f6ad2eb7138e55154ab5f","url":"graphics/project_images/arch2.webp"},{"revision":"a97efb65556bf0113244ed7ba9f8b2c6","url":"graphics/project_images/athletes.jpg"},{"revision":"3803cd76b236cc604ac4ff86ff541027","url":"graphics/project_images/athletes.webp"},{"revision":"474cdbd64ad499ccffe5907d3023c80d","url":"graphics/project_images/cryptocurrency.jpg"},{"revision":"629e4599fa6bed2e9cd2e9877d6b5e27","url":"graphics/project_images/cryptocurrency.webp"},{"revision":"a08cbabf6ae56ed296ed7f592df47060","url":"graphics/project_images/drzewo.jpg"},{"revision":"d9c197fed036970f62427d1796ad3b68","url":"graphics/project_images/drzewo.webp"},{"revision":"e86589f62a78307bddd0fcbd5b0a3fa4","url":"graphics/project_images/firebase.jpg"},{"revision":"704c84b6f737349150b7b860884fd9c5","url":"graphics/project_images/firebase.webp"},{"revision":"60a299019588042bff5168be8c3a1eb4","url":"graphics/project_images/fizjo.jpg"},{"revision":"85db028c16aa2a0c6896ab829f4d858e","url":"graphics/project_images/fizjo.webp"},{"revision":"33f1ab8f8b28387271904b9d6774e06c","url":"graphics/project_images/gbfinder.jpg"},{"revision":"b4b610b0f896804a785335be9ef55fb9","url":"graphics/project_images/gbfinder.webp"},{"revision":"a616360040d18a0521dae1cb137c2922","url":"graphics/project_images/jsbooks.jpg"},{"revision":"bbf1f31bae93952d45cfca331ecbd619","url":"graphics/project_images/jsbooks.webp"},{"revision":"391e5f9c4d2dbe9f116e6ce5b8253af4","url":"graphics/project_images/pogodynka.jpg"},{"revision":"0af74643cf16a079b9702c56ad3dc473","url":"graphics/project_images/pogodynka.webp"},{"revision":"a36bbb3cad20f1c4435bfb6a55a74423","url":"graphics/project_images/portfolio_aktualne.jpg"},{"revision":"0d0e5d4ff23ed53cc26186b3bf4aad1b","url":"graphics/project_images/portfolio_aktualne.webp"},{"revision":"75bda6ba5b47a849d6340e6b5aab9db4","url":"graphics/project_images/skills/bootstrap.png"},{"revision":"f25d4e454f8a74b9c8f5b9bfbf5afd35","url":"graphics/project_images/skills/css.png"},{"revision":"3e9b4e2d5e32339709d6d4c3334123f4","url":"graphics/project_images/skills/html5.png"},{"revision":"b11d1aea42b291cb49afbc5a88ea37e5","url":"graphics/project_images/skills/html5.svg"},{"revision":"86c81c61ab6bf8eec141cbfc109e1d61","url":"graphics/project_images/skills/jquery.png"},{"revision":"48a5291b4671b05594bc36ca32b54b4a","url":"graphics/project_images/skills/js.png"},{"revision":"c307e2b81411d9322e01a7705a8388ff","url":"graphics/project_images/skills/linux.png"},{"revision":"696461d0ca20ab44ca4fad1fade56d86","url":"graphics/project_images/skills/material.png"},{"revision":"269ad42f791e03518392fb2171cbef51","url":"graphics/project_images/skills/material.svg"},{"revision":"6389d7391842f2f2afc4310ecb4c1bc0","url":"graphics/project_images/skills/mysql.png"},{"revision":"db93f5444c9a012865b8eddbd632dcc1","url":"graphics/project_images/skills/php.png"},{"revision":"f2b3fe74e7524fb87637671efc881142","url":"graphics/project_images/skills/pug.png"},{"revision":"017e44d93a5d3da52a742b128019d270","url":"graphics/project_images/skills/pug.svg"},{"revision":"9eb231e8e107b7005eba74e5194386b2","url":"graphics/project_images/skills/react.png"},{"revision":"43058db8c02f50c42ca4ad69169ca612","url":"graphics/project_images/skills/redux.png"},{"revision":"32d9ce6746d6a98bafa1b9981dce179e","url":"graphics/project_images/skills/router.png"},{"revision":"42fe10dc714f81f6dd96de5112692918","url":"graphics/project_images/skills/sass.png"},{"revision":"2c03dfb99d2afc7edb632aac78a09f44","url":"graphics/project_images/skills/skills.png"},{"revision":"247a86d0ad168633ff4be8f8f48f82e8","url":"graphics/project_images/skills/skills.webp"},{"revision":"0daa394f0ac430ef739fcb90a36181aa","url":"graphics/project_images/skills/styled.png"},{"revision":"18f2691a31c2d82b7c7020258aa5ae91","url":"graphics/project_images/Thumbs.db"},{"revision":"fb5205d2d84051136ab489c65a3c755b","url":"graphics/skills/css_sprites.png"},{"revision":"456fdc290cea0c6a850a8d3b8f107d2c","url":"graphics/skills/css_sprites.webp"},{"revision":"153535e666b05593815529afdaca8552","url":"graphics/skills/css.svg"},{"revision":"45ee854646d205c44f81e2b4ae72816f","url":"graphics/skills/css2.svg"},{"revision":"1a703f63ae7b71e9a75706a1780aea53","url":"graphics/skills/css3.svg"},{"revision":"c3575686e4aaaae3e9e87cc2bb1abf7c","url":"graphics/skills/html.svg"},{"revision":"42a4aedd09b52f141ba6819f79e9ea57","url":"graphics/skills/html5.svg"},{"revision":"9c8b14503c2fa7cb9f9188dcaf715416","url":"graphics/skills/javascript-logo-svgrepo-com.svg"},{"revision":"94e637f20ee5a5c953b321cbc2c65e5b","url":"graphics/skills/javascript.svg"},{"revision":"0fb1be87d8b8bd634fa1b8279594c8c6","url":"graphics/skills/jquery.svg"},{"revision":"2bf747f09a4f9135fbd3032432f4158b","url":"graphics/skills/linux.svg"},{"revision":"ba99aecd075dddfb01b64b37724165fb","url":"graphics/skills/material.svg"},{"revision":"ae7a13acbed71b1ca6557ac62fd7b7b2","url":"graphics/skills/mysql.svg"},{"revision":"7b2fa4634130c4255ad4fc7c2c68f8db","url":"graphics/skills/php.svg"},{"revision":"59dd488ed413f5aa066cab2786afb85c","url":"graphics/skills/pug.svg"},{"revision":"7cb27ffaad0a5d2a467062744128c439","url":"graphics/skills/react-router.svg"},{"revision":"7038477259b6f1696308f867ce8c0a3a","url":"graphics/skills/react.svg"},{"revision":"85772647236e76b8e772c14c092a28ac","url":"graphics/skills/redux.svg"},{"revision":"15ea5f9a1fbfea23499a0d957898c1d5","url":"graphics/skills/sass.svg"},{"revision":"af4fcf7742a5893dfae6164fab2c3834","url":"graphics/skills/styled-components.svg"},{"revision":"a9a7245dfd4d4081c0c6d16a5b2107c5","url":"graphics/skills/typescript.svg"},{"revision":"4672bebd7185509e54ac421ae5199499","url":"graphics/skills/webcomponents.svg"},{"revision":"b4abf3053beccc016c3381d5f3d242b2","url":"graphics/skills/webworkers.svg"},{"revision":"56adfe899d5e3b9b4b58614d515bdfeb","url":"graphics/textures/broken-noise.png"},{"revision":"260579664298ea63be413db69f9a0c53","url":"graphics/textures/broken-noise.webp"},{"revision":"5e2ccbe5bbb368945d5c19c59cdcb1b2","url":"graphics/textures/intro_small.jpg"},{"revision":"5ee12f6f69aa007545ae702c8c42c468","url":"graphics/textures/intro_small.webp"},{"revision":"28fb341baaeef3d95bd8809c80be3715","url":"graphics/textures/intro.jpg"},{"revision":"c0c49f04e49cd1932dd0d8e0265959e7","url":"graphics/textures/intro.webp"},{"revision":"cdcf1b1a09c01ed7917f552f2f363ae0","url":"index.html"},{"revision":"279083bd4521945601a87c3cb705022f","url":"js/bundle.js"},{"revision":"925b1cfb3ff415d8a781c0a026a8f096","url":"js/modernizr-custom.js"},{"revision":"e61e097c12e08f060a3c5ce1ec52d6eb","url":"js/ResizeSensor.min.js"},{"revision":"307418b53d24ed274b8b5a01bb45597f","url":"js/trans.js"},{"revision":"70ff5023c02180979648a8ca4d21f042","url":"README.md"},{"revision":"2f6891fae2b27e28cd062665851e595c","url":"styles/style.css"},{"revision":"104536ce72429ec1f598883183de70b7","url":"workbox-69b5a3b7.js"}]);

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst({cacheName:'usersCache'})
  );

workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|webp|gif)/,
  workbox.strategies.cacheFirst({
    cacheName: 'imagesCache',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 14 * 24 * 60 * 60, 
      }),
    ],
  })
);

workbox.routing.registerRoute(
  // new RegExp('.*\.css'),
  /.*\.css/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'styleCache',
  })
);

workbox.routing.registerRoute(
  new RegExp('.*\.js'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'scriptsCache',
  })
);
workbox.routing.registerRoute(
  ///index\.html/,
  /.*\.(?:HTML)/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'documentCache',
  })
);

workbox.routing.registerRoute(
  /.*\.(?:woff|woff2|ttf|otf)/,
  workbox.strategies.cacheFirst({
    cacheName: 'fontCache',
  })
);


console.log('form srcs')

const networkOnly = new NetworkOnly();
const navigationHandler = async (params) => {
  try {
    // Attempt a network request.
    console.log('OK')
    return await networkOnly.handle(params);
    
  } catch (error) {
    // If it fails, return the cached HTML.
    console.log('dupa');
    return caches.match(FALLBACK_HTML_URL, {
      cacheName: CACHE_NAME,
    });
  }
};
