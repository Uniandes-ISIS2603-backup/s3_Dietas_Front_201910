import {Suspension} from '../suspension/suspension';
import {Semana} from '../semana/semana';
import {Dieta} from './dieta';

export class DietaDetail extends Dieta{
    
      /**
       * Suspensiones de la dieta
       */
      suspensiones: Suspension[];

      /**
       * Semanas de la dieta
       */
      semanas: Semana[];
      
}