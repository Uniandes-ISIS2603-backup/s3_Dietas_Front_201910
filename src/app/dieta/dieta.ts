import {Persona} from '../persona/persona';
import {Semana} from '../semana/semana';
import {Suspension} from '../suspension/suspension';

export class Dieta{
    /**
     * id de la dieta
     */
    id:number;
    /**
     * nombre de la dieta
     */
    nombre: string;
    /**
     * tipo de la dieta
     */
    tipo: string;
    /**
     * objetivo de la dieta
     */
    objetivo: string;
    /**
     * dias suspendida de la dieta
     */
    diasSuspendida: number;
    /**
     * Persona a la cual fue asignada la dieta
     */
    persona: Persona;

    semanas: Semana[];

    suspension: Suspension[];
}
