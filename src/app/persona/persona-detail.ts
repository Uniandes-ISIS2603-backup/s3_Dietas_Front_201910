import{Persona} from'./persona';
import { Calificacionycomentario } from '../calificacionycomentario/calificacionycomentario';
import { Foto } from '../foto/foto';
import { Dieta } from '../dieta/dieta';
import { Pago } from '../pago/pago';
import { QuejaYReclamo } from '../quejayreclamo/quejayreclamo';
export class PersonaDetail extends Persona {
  
  fotos: Foto;
  calificaciones: Calificacionycomentario[];
  dietas: Dieta[];
  pagos: Pago[];
  quejas: QuejaYReclamo[];
  


}