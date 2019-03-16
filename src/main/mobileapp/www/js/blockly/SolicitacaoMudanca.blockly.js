window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.SolicitacaoMudanca = window.blockly.js.blockly.SolicitacaoMudanca || {};

/**
 * SolicitacaoMudanca
 */
window.blockly.js.blockly.SolicitacaoMudanca.Executar = function() {
 var item, valor;
  this.cronapi.util.scheduleExecution(function() {
     this.cronapi.util.callServerBlocklyAsynchronous('blockly.SolicitacaoMudanca:existePedido', function(sender_valor) {
        valor = sender_valor;
      this.cronapi.screen.changeValueOfField('vars.existeSolicitacao', valor);
    }.bind(this));
  }.bind(this), 0, 15, 'seconds');
}
