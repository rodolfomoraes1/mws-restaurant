var cacheVersion = 'mws-cache-version-1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheVersion).then(function(cache) {
    return cache.addAll([
      './',
      'index.html',
      'restaurant.html',
      '/css/styles.css',
      '/css/responsive.css',
      '/js/dbhelper.js',
      '/js/main.js',
      '/js/restaurant_info.js',
      'data/restaurants.json',
      '/img/1.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg', '/img/5.jpg',
      '/img/6.jpg', '/img/7.jpg', '/img/8.jpg', '/img/9.jpg', '/img/10.jpg',
      'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
      'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js'
    ]).catch();
  }));
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheList) {
      return Promise.all(
        cacheList.filter(function(newCache) {
          return newCache.startsWith('mws-cache-version-') &&
                 newCache != cacheVersion;
        }).map(function(newCache) {
          return caches.delete(newCache);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith (    
    caches.match(event.request).then(
      function(response) {
        if (response !== undefined) {
          return response;
        } else {        
          return fetch(event.request).then(
              function (response) {
                let responseClone = response.clone();
                caches.open(cacheVersion).then(
                  function (cache) {
                    cache.put(event.request, responseClone);
                  }
                );
                return response;
              }
          );
        }
      }
    ) 
  );
});
