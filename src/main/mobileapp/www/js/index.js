var device = { 
  init: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  onDeviceReady: function() {
    // push notification 
    var firebase = window.FirebasePlugin;
    var hostapp = window.hostApp;
    var device = window.device;
    var build = window.BuildInfo;
    
    // get token firebase
    /*if (firebase && hostapp && device) {
      var appURL = hostapp + 'device';
      
      debugger;
      firebase.getToken(function(code) {
        debugger;
        var data  = { id : device.uuid, 
                      appName : build.packageName,
                      appVersion : build.version,
                      platform : device.platform, 
                      platformVersion : device.version,
                      model : device.model, 
                      token : code };
        console.log('Received Token: ' + (code ? 'OK' :'NOK'));
        $.post(appURL, data).done(function(d) {
          console.log('Received Event: devicesend');
        });
      }.bind(this), 
      function(err) {
        console.error(err);
      });
      
    }*/
  }
};
device.init();