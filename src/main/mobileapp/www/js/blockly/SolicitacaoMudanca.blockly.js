window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.SolicitacaoMudanca = window.blockly.js.blockly.SolicitacaoMudanca || {};

/**
 * SolicitacaoMudanca
 */
window.blockly.js.blockly.SolicitacaoMudanca.Executar = function() {
 var item, aceito, idSolicitacaoMudanca, valor;
  this.cronapi.util.scheduleExecution(function() {
     this.cronapi.util.callServerBlocklyAsynchronous('blockly.SolicitacaoMudanca:existePedido', function(sender_valor) {
        valor = sender_valor;
      this.cronapi.screen.changeValueOfField('vars.existeSolicitacao', valor);
    }.bind(this));
  }.bind(this), 0, 15, 'seconds');
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.SolicitacaoMudanca.confirmar = function(idSolicitacaoMudanca) {
 var item, aceito, valor;
  aceito = this.cronapi.screen.getValueOfField('vars.aceito');
  if (aceito == true) {
    this.cronapi.util.callServerBlocklyAsynchronous('blockly.SolicitacaoMudanca:confirmar', function(sender_item) {
        item = sender_item;
      this.cronapi.util.executeJavascriptNoReturn('Solicitacao_Mudanca.cancel();');
      this.cronapi.util.executeJavascriptNoReturn('Solicitacao_Mudanca.search();');
    }.bind(this), idSolicitacaoMudanca);
  }
}
