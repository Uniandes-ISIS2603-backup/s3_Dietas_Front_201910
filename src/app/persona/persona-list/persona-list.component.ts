import { Component, OnInit, Input } from '@angular/core';
import{Persona} from '../persona'
import{PersonaDetail} from '../persona-detail'
import{PersonaService} from '../persona.service'
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
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit{ 
  
  constructor(private personaService:PersonaService,private fotoService:FotoService,private calificacionService:CalificacionycomentarioService, 
    private quejaYReclamoService:QuejaYReclamoService,private pagoService:PagoService,private dietaService:DietaService) { }

  personas: Persona[];

  calificacionesYComentarios: Calificacionycomentario[];
  quejasYReclamos:QuejaYReclamo[];
  pagos:Pago[];
  fotos:Foto[];
  dietas:Dieta[];

  @Input() idHall:number;
  selectedPersona: PersonaDetail;
  @Input() personas_id:number;

  //getPersonasDeHall(hallId: number):void{
    
  //console.log("obteniendo personas ");
    //this.personaService.getPersonasDeHall(hallId).subscribe(clienteAux=> this.personas=clienteAux);
  //}

  getPersonas():void{
    this.personaService.getPersonas().subscribe(clienteAux=> this.personas=clienteAux);
  }
       /**
     *  vuelve las personas a personas del hall
     */
//    getCalificacionesDePersona(personaId: number):void{
//      console.log("obteniendo calificaciones ");
//      this.calificacionService.getCalificacionYComentarioDePersona(personaId).subscribe(clienteAux=> this.calificaciones=clienteAux);
//    }
    getFotoDePersona(personaId: number):void{
      console.log("obteniendo fotos ");
      this.fotoService.getFotosDePersona(personaId).subscribe(clienteAux=> this.fotos=clienteAux);
    }  
//    getQuejaYReclamoDePersona(personaId: number):void{
//      console.log("obteniendo quejas ");
//      this.quejaYReclamoService.getQuejasDePersonas(personaId).subscribe(clienteAux=> this.quejas=clienteAux);
//    } 
    getPagosDePersona(personaId: number):void{
      console.log("obteniendo pagos ");
      this.pagoService.getPagosDePersonas(personaId).subscribe(clienteAux=> this.pagos=clienteAux);
    } 
    getDietasDePersona(personaId: number):void{
      console.log("obteniendo dietas ");
      this.dietaService.getDietasDePersonas(personaId).subscribe(clienteAux=> this.dietas=clienteAux);
    } 

        /**
     *  selecciona el hall que fue cliqueado
     */
    onSelected(ppersona_id: number): void {
      this.personas_id = ppersona_id;
      this.personaService.getPersonaDetail(ppersona_id).subscribe(o =>
        { 
          this.selectedPersona = o;
          console.log("Persona listar id .ts"+this.selectedPersona.id);         
        });
      
    }

  ngOnInit() {
    
    this.selectedPersona = new PersonaDetail();
    this.getPersonas(); 
   
  }

}