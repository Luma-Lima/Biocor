package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;


@CronapiMetaData(type = "blockly")
@CronappSecurity
public class AtualizarMedico {

public static final int TIMEOUT = 300;

/**
 *
 * @param medico_destino
 * @param dt_agenda
 * @param horario_escala
 * @param medico_origem
 * @return Var
 */
// Atualizar_Medico
public static Var Executar(Var medico_destino, Var dt_agenda, Var horario_escala, Var medico_origem) throws Exception {
 return new Callable<Var>() {

   public Var call() throws Exception {
    cronapi.database.Operations.execute(Var.valueOf("app.entity.Agenda"), Var.valueOf("update Agenda set medico = :medico_destino where dt_agenda_age >= :dt_agenda AND horario_Escala = :horario_Escala AND medico = :medico_origem"),Var.valueOf("medico_destino",medico_destino),Var.valueOf("dt_agenda",dt_agenda),Var.valueOf("horario_Escala",horario_escala),Var.valueOf("medico_origem",medico_origem));
    return Var.VAR_NULL;
   }
 }.call();
}

}

