package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;


@CronapiMetaData(type = "blockly")
@CronappSecurity
public class SolicitacaoMudanca {

public static final int TIMEOUT = 300;

/**
 *
 * @return Var
 */
// SolicitacaoMudanca
public static Var existePedido() throws Exception {
 return new Callable<Var>() {

   private Var solicitacaoMudanca = Var.VAR_NULL;
   private Var existeMudanca = Var.VAR_NULL;

   public Var call() throws Exception {
    solicitacaoMudanca = cronapi.list.Operations.getFirst((cronapi.database.Operations.query(Var.valueOf("app.entity.Solicitacao_Mudanca"),Var.valueOf("select s.id from Solicitacao_Mudanca s where s.medicoDest.user.login = :medicoDestUserLogin AND s.cd_status_mud = :cd_status_mud"),Var.valueOf("medicoDestUserLogin",cronapi.util.Operations.getCurrentUserName()),Var.valueOf("cd_status_mud",Var.valueOf(0)))));
    existeMudanca = Var.VAR_FALSE;
    if (Var.valueOf(Var.valueOf(!solicitacaoMudanca.equals(Var.VAR_NULL)).getObjectAsBoolean() && Var.valueOf(!cronapi.list.Operations.get(solicitacaoMudanca, Var.valueOf(1)).equals(Var.VAR_NULL)).getObjectAsBoolean()).getObjectAsBoolean()) {
        existeMudanca = Var.VAR_TRUE;
    }
    return existeMudanca;
   }
 }.call();
}

}

