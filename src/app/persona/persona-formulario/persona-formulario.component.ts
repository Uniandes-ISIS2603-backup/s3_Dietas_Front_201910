import { Component, OnInit, Input } from '@angular/core';
import{Persona} from '../persona';
import{PersonaDetail} from '../persona-detail';
import{PersonaService} from '../persona.service';
import { Calificacionycomentario } from '../../calificacionycomentario/calificacionycomentario';
import { QuejaYReclamo } from '../../quejayreclamo/quejayreclamo';
import { Pago } from '../../pago/pago';
import { Foto } from '../../foto/foto';
import { Dieta } from '../../dieta/dieta';
import { FotoService } from '../../foto/foto.service';
import { CalificacionycomentarioService } from '../../calificacionycomentario/calificacionycomentario.service';
import { QuejaYReclamoService } from '../../quejayreclamo/quejayreclamo.service';
import { PagoService } from '../../pago/pago.service';
import { DietaService } from '../../dieta/dieta.service';

@Component({
  selector: 'app-persona-formulario',
  templateUrl: './persona-formulario.component.html',
  styleUrls: ['./persona-formulario.component.css']
})
export class PersonaFormularioComponent implements OnInit {

  constructor(private personaService:PersonaService,private fotoService:FotoService,private calificacionService:CalificacionycomentarioService, 
    private quejaYReclamoService:QuejaYReclamoService,private pagoService:PagoService,private dietaService:DietaService) { }

  @Input() id: number;
  selectedPersona: PersonaDetail;

  calificaciones: Calificacionycomentario[];
  quejas:QuejaYReclamo[];
  pagos:Pago[];
  fotos:Foto[];
  dietas:Dieta[];

  private focusoutHandler(refVar) {

      this.id = refVar.value;
      if(this.id<0){console.log("Ingresar id correcta");}
  }

  private ingresar(pid: number){
      this.id = pid;
      this.personaService.getPersonaDetail(pid).subscribe(o =>
        { 
          this.selectedPersona = o;
          console.log("Persona listar id .ts"+this.selectedPersona.id);         
        });
  }

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
  ngOnInit() {
    this.selectedPersona = new PersonaDetail();
  }

}