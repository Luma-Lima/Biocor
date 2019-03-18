window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.OuvinteNotificacao = window.blockly.js.blockly.OuvinteNotificacao || {};

/**
 * OuvinteNotificacao
 */
window.blockly.js.blockly.OuvinteNotificacao.iniciar = function() {
 var item, dados, token, usuarioDestinoId, agendaId;
  this.cronapi.cordova.device.getFirebaseToken(function(sender_token) {
      token = sender_token;
    dados = this.cronapi.object.createObjectFromString('{}');
    this.cronapi.object.setProperty(dados, 'appName', this.cronapi.util.executeJavascriptReturn('window.BuildInfo ? window.BuildInfo.packageName : \'\';'));
    this.cronapi.object.setProperty(dados, 'appVersion', this.cronapi.util.executeJavascriptReturn('window.BuildInfo ? window.BuildInfo.version : \'\';'));
    this.cronapi.object.setProperty(dados, 'token', token);
    this.cronapi.object.setProperty(dados, 'platform', this.cronapi.cordova.device.getDeviceInfo('platform'));
    this.cronapi.object.setProperty(dados, 'model', this.cronapi.cordova.device.getDeviceInfo('model'));
    this.cronapi.object.setProperty(dados, 'platformVersion', this.cronapi.cordova.device.getDeviceInfo('version'));
    this.cronapi.object.setProperty(dados, 'uuid', this.cronapi.cordova.device.getDeviceInfo('uuid'));
    this.cronapi.util.callServerBlocklyNoReturn('blockly.Notificacao:gravarDispositivo', dados);
  }.bind(this), function(sender_item) {
      item = sender_item;
  }.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.OuvinteNotificacao.solicitarMudancaAgenda = function(agendaId, usuarioDestinoId) {
 var item, dados, token;
  this.cronapi.util.callServerBlocklyNoReturn('blockly.Notificacao:solicitarMudancaAgenda', agendaId, usuarioDestinoId);
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.OuvinteNotificacao.ouvir = function() {
 var item, dados, token, usuarioDestinoId, agendaId;
  this.cronapi.cordova.device.getFirebaseNotificationData(function(sender_dados) {
      dados = sender_dados;
    this.cronapi.screen.notify('success',dados);
  }.bind(this), function(sender_dados) {
      dados = sender_dados;
  }.bind(this));
}
