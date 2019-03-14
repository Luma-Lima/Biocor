app.factory('PlantaoAPIService', function($http, calendarConfig, Configurations){

  var actions = [{
    label: '<i class=\'glyphicon glyphicon-pencil\'></i>',
    onClick: function(args) {
      alert.show('Edited', args.calendarEvent);
    }
  }, {
    label: '<i class=\'glyphicon glyphicon-remove\'></i>',
    onClick: function(args) {
      alert.show('Deleted', args.calendarEvent);
    }
  }];
  let responseData;
  let calendarData = [];
  let userLogado;
 
  var getCalendarData = new Promise((resolve, reject) =>{
    $http({
              method: 'GET',
              url:  Configurations.getApiServer() + '/api/cronapi/rest/blockly.BuscarDados:ExecutarBuscarDados/',
              headers: {
                 'Content-Type': 'application/json'
               }
    }).then(function successCallback(response) {
              responseData = response.data;
              for (i = 0; i < responseData.length; i++) {
                var day = 60 * 60 * 24 * 1000;
                calendarData.push({
                  title: responseData[i].title,
                  medicoId: responseData[i].medicoId,
                  medico: responseData[i].medico,
                  responsavel: responseData[i].responsavel,
                  horario: '07:00 - 19:00',
                  local: responseData[i].local,
                  color: calendarConfig.colorTypes.warning,
                  startsAt: new Date(responseData[i].startsAt + day),
                  endsAt: new Date(responseData[i].endsAt + day),
                  draggable: responseData[i].draggable,
                  resizable: responseData[i].resizable,
                  actions: responseData[i].actions,
                  agendaId: responseData[i].agendaId,
                  agendaMedicoId: responseData[i].agendaMedicoId
              }) 
              }
              resolve(calendarData);            
          }, function errorCallback(response) {
              reject(response);
          });
})
var getUserLogin = new Promise((resolve, reject) =>{
    $http({
              method: 'GET',
              url:  Configurations.getApiServer() + '/api/cronapi/rest/blockly.MedLogado:UserLogado/',
              headers: {
                 'Content-Type': 'application/json'
               }
    }).then(function successCallback(response) {
      resolve(response.data);
    });

})
  
      return {
        getData: function(){
          return getCalendarData;
        },
        getLogin: function(){
          return getUserLogin;
        }
      }
    
});