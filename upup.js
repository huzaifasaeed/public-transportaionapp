// upup.js

start: function(settings) {
  this.addSettings(settings);

  // register the service worker
  _serviceWorker.register(_settings.script, {scope: './'}).then(function(registration) {
    // Registration was successful
    if (_debugState) {
      console.log('ServiceWorker registration successful with scope: %c'+registration.scope, _debugStyle);
    }

...