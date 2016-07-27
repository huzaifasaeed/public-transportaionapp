self.addEventListener('fetch', function(event) {
  event.respondWith(
    // try to return untouched request from network first
    fetch(event.request.url, { mode: 'no-cors' }).catch(function() {
      // if it fails, try to return request from the cache
      return caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        }
        // if not found in cache, return default offline content
        if (event.request.headers.get('accept').includes('text/html')) {
          return caches.match('sw-offline-content');
        }
      })
    })
  );
});