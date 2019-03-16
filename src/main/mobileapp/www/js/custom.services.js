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
    
    let userLogado;
 
    // var getCalendarData = new Promise((resolve, reject) =>{
    function getCalendarData(success, error) {
      debugger;
      let responseData;
      let calendarData = [];

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
              horario: responseData[i].horarioEscala,
              local: responseData[i].local,
              color: calendarConfig.colorTypes.warning,
              startsAt: new Date(responseData[i].startsAt + day),
              endsAt: new Date(responseData[i].endsAt + day),
              draggable: responseData[i].draggable,
              resizable: responseData[i].resizable,
              actions: responseData[i].actions,
              agendaId: responseData[i].agendaId,
              agendaMedicoId: responseData[i].agendaMedicoId,
              horarioEscalaId: responseData[i].horarioEscalaId 
          }) 
          }
          success(calendarData);
          //resolve(calendarData);            
      }, function errorCallback(response) {
          error(response);
          //reject(response);
      });
    }

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
      getData: function(success, error){
        return getCalendarData(success, error);
      },
      getLogin: function(){
        return getUserLogin;
      }
    }
    
});