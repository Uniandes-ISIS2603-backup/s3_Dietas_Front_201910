import {Persona} from '../persona/persona';
export class Dieta{
    /**
     * id de la dieta
     */
    id:number;
    /**
     * nombre de la dieta
     */
    name: string;
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
}
