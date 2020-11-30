importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');











//workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

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
