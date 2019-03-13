package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;


@CronapiMetaData(type = "blockly")
@CronappSecurity
public class Notificacao {

public static final int TIMEOUT = 300;

/**
 *
 * @return Var
 */
// Notificacao
public static Var enviar() throws Exception {
 return new Callable<Var>() {

   private Var dados = Var.VAR_NULL;

   public Var call() throws Exception {
    dados = cronapi.json.Operations.createObjectJson();
    cronapi.json.Operations.setJsonOrMapField(dados, Var.valueOf("solicitado"), Var.valueOf("304BF43E-0E62-4F4A-8A63-3F22D7AD4611"));
    cronapi.json.Operations.setJsonOrMapField(dados, Var.valueOf("solicitante"), Var.valueOf("304BF43E-0E62-4F4A-8A63-3F22D7AD4611"));
    cronapi.pushnotification.Operations.sendNotification(Var.valueOf("AAAAYXpS-3s:APA91bHKz9BApNs3EHNG-moJ7czTOFL5b55D-miNbShiLClZ3r925zz2kf6lGktkqdrNMuxng3UxYsNFqrAmS-6C7Uu9KfHnq8g1MivlT3pmYOKEaut07U4TJSjgL16ZoYzvqMeGxc6P"), Var.valueOf(""), Var.valueOf("Mudança de Plantão"), Var.valueOf("Mudança"), dados);
    return Var.VAR_NULL;
   }
 }.call();
}

/**
 *
 * @param dados
 */
// Descreva esta função...
public static void gravarDispositivo(Var dados) throws Exception {
  new Callable<Var>() {

   private Var uuid = Var.VAR_NULL;
   private Var token = Var.VAR_NULL;
   private Var dispositivo = Var.VAR_NULL;
   private Var usuario = Var.VAR_NULL;

   public Var call() throws Exception {
    uuid = cronapi.json.Operations.getJsonOrMapField(dados, Var.valueOf("uuid"));
    token = cronapi.json.Operations.getJsonOrMapField(dados, Var.valueOf("token"));
    if (cronapi.logic.Operations.isNullOrEmpty(uuid).negate().getObjectAsBoolean()) {
        dispositivo = cronapi.database.Operations.query(Var.valueOf("app.entity.Device"),Var.valueOf("select d from Device d where d.id = :id"),Var.valueOf("id",uuid));
        usuario = cronapi.database.Operations.query(Var.valueOf("app.entity.User"),Var.valueOf("select u from User u where u.login = :login"),Var.valueOf("login",cronapi.util.Operations.getCurrentUserName()));
        if (Var.valueOf(Var.valueOf(!dispositivo.equals(Var.VAR_NULL)).getObjectAsBoolean() && Var.valueOf(!cronapi.object.Operations.getObjectField(dispositivo, Var.valueOf("id")).equals(Var.VAR_NULL)).getObjectAsBoolean()).getObjectAsBoolean()) {
            cronapi.object.Operations.setObjectField(dispositivo, Var.valueOf("user"), cronapi.object.Operations.newObject(Var.valueOf("app.entity.User"),Var.valueOf("id",cronapi.object.Operations.getObjectField(usuario, Var.valueOf("id")))));
            cronapi.object.Operations.setObjectField(dispositivo, Var.valueOf("token"), token);
            cronapi.database.Operations.update(Var.valueOf("app.entity.Device"),dispositivo);
        } else {
            dispositivo = cronapi.object.Operations.newObject(Var.valueOf("app.entity.Device"),Var.valueOf("id",uuid),Var.valueOf("token",token),Var.valueOf("platform",cronapi.json.Operations.getJsonOrMapField(dados, Var.valueOf("platform"))),Var.valueOf("model",cronapi.json.Operations.getJsonOrMapField(dados, Var.valueOf("model"))),Var.valueOf("platformVersion",cronapi.json.Operations.getJsonOrMapField(dados, Var.valueOf("platformVersion"))),Var.valueOf("appName",cronapi.json.Operations.getJsonOrMapField(dados, Var.valueOf("appName"))),Var.valueOf("appVersion",cronapi.json.Operations.getJsonOrMapField(dados, Var.valueOf("appVersion"))),Var.valueOf("user",cronapi.object.Operations.newObject(Var.valueOf("app.entity.User"),Var.valueOf("id",cronapi.object.Operations.getObjectField(dispositivo, Var.valueOf("id"))))));
            cronapi.database.Operations.insert(Var.valueOf("app.entity.Device"),dispositivo);
        }
    }
   return Var.VAR_NULL;
   }
 }.call();
}

}

