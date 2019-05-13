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

   function buscarDados(){
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
                  medico: responseData[i].medico,
                  responsavel: responseData[i].responsavel,
                  horario: responseData[i].horarioEscala,
                  local: responseData[i].local,
                  color: responseData[i].color,
                  startsAt: new Date(responseData[i].startsAt + day),
                  endsAt: new Date(responseData[i].endsAt + day),
                  draggable: responseData[i].draggable,
                  resizable: responseData[i].resizable,
                  actions: responseData[i].actions,
                  agendaId: responseData[i].agendaId,
              }) 
              }
              console.log(calendarData);
          }, function errorCallback(response) {
              console.log(response);
          });
      return calendarData;
  };

      return {
        getData: function(){
          return buscarDados();
        },
        getRealData: function(){
          return $http.get('https://jsonplaceholder.typicode.com/todos/')
        }
      }
    
});   