import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { HalloffameService } from '../halloffame.service';

import { Halloffame} from '../halloffame';

import { PersonaService } from '../../persona/persona.service';

import { HalloffameDetail } from '../halloffame-detail';
import { Persona } from '../../persona/persona';




@Component({
  selector: 'app-halloffamelistar',
  templateUrl: './halloffamelistar.component.html',
  styleUrls: ['./halloffamelistar.component.css']
})
export class HalloffamelistarComponent implements OnInit{



     /**
     * Constructor for the component
     * @param halloffameService The author's services provider
     */
    constructor(private halloffameService: HalloffameService, private personaService : PersonaService, private router: Router) { }

    mostrarCrear : boolean;



    mostrarEditar : boolean;
  
    mostrarCrearM(): void{
      this.mostrarCrear = !this.mostrarCrear;
     
    }

    mostrarEditarM(id:number): void{
      this.mostrarEditar = !this.mostrarEditar;
      this.onSelected(id);
      console.log("id: "+id);
      console.log("halls_id: "+this.halls_id);
    }
   /**
     * The list of halls which belong to the Dietas
     */
    halls: Halloffame[];

     /**
     * The list of personas which belong to the hall
     */
    personas: Persona[];

    /**
     * The id of the hall
     */
    halls_id: number;


     /**
     * el hall seleccionado
     */
    selectedHall: HalloffameDetail;
    aEditar:Halloffame;

     /**
     * Asks the service to update the list of halls
     */
    getHalls(): void {
        this.halloffameService.getHalls().subscribe(theHalls => 
        this.halls = theHalls);
    }




     /**
     *  vuelve las personas a personas del hall
     */
    getPersonasDeHall(hallId: number):void{
      console.log("obteniendo personas ");
      this.personaService.getPersonasDeHall(hallId).subscribe(clienteAux=> this.personas=clienteAux);
    }
  


    /**
     *  selecciona el hall que fue cliqueado
     */
    onSelected2(phalls_id: number): void{   
    this.halls_id = phalls_id;
    this.halloffameService.getHalloffameDetail(phalls_id).subscribe(o =>
      { 
        this.selectedHall = o;
        console.log("hall listar id .ts"+this.selectedHall.id);
      });
      this.mostrarEditar =true;
    }
    onSelected(phalls_id: number): void {
    this.halls_id = phalls_id;
    this.halloffameService.getHalloffameDetail(phalls_id).subscribe(o =>
      { 
        this.selectedHall = o;
        console.log("hall listar id .ts"+this.selectedHall.id);
      });
  }

    /**
     * This will initialize the component by retrieving the list of halls from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
      this.mostrarCrear=false;
      this.mostrarEditar=false;
     
      this.selectedHall = new HalloffameDetail();
      this.getHalls();
        
    }


}