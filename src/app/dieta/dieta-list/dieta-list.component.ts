import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import {Dieta} from '../../dieta/dieta';
import {DietaService} from '../../dieta/dieta.service';
import { DietaDetail } from '../dieta-detail';
import { SuspensionService } from '../../suspension/suspension.service';
import { SemanaService } from '../../semana/semana.service';
import { Semana } from '../../semana/semana';
import { Suspension } from '../../suspension/suspension';

@Component({
    selector: 'app-dieta-list',
    templateUrl: './dieta-list.component.html',
    styleUrls: ['./dieta-list.component.css']
})
export class DietaListComponent implements OnInit {

/**
     * Constructor for the component
     * @param dietaService The author's services provider
     */
    constructor(private suspensionService:SuspensionService, private semanaService:SemanaService,private dietaService: DietaService, private router: Router) { }

    mostrarCrear : boolean;



    mostrarEditar : boolean;
  
    mostrarCrearM(): void{
      this.mostrarCrear = !this.mostrarCrear;
     
    }

    mostrarEditarM(id:number): void{
      this.mostrarEditar = !this.mostrarEditar;
      this.onSelected(id);
      console.log("id: "+id);
      console.log("dieta_id: "+this.dietas_id);
    }

    suspensiones:Suspension[];
    semanas:Semana[];

   /**
     * The list of halls which belong to the BookStore
     */
    dietas: Dieta[];

    @Input() dietas_id: number;
    selectedDieta: Dieta;

    aEditar:Dieta;

    getSuspensionesDeDieta(dietaId: number):void{
      console.log("obteniendo suspensiones ");
      this.suspensionService.getSuspensionesDeDieta(dietaId).subscribe(clienteAux=> this.suspensiones=clienteAux);
    } 
    getSemanasDeDieta(dietaId: number):void{
      console.log("obteniendo semanas ");
      this.semanaService.getSemanasDeDieta(dietaId).subscribe(clienteAux=> this.semanas=clienteAux);
    }  
    /**
     * Asks the service to update the list of halls
     */
    getDietas(): void {
        this.dietaService.getDietas().subscribe(d => 
        this.dietas = d);
    }

    onSelected2(pdietas_id: number): void{   
      this.dietas_id = pdietas_id;
      this.dietaService.getDieta(pdietas_id).subscribe(o =>
        { 
          this.selectedDieta = o;
        });
        this.mostrarEditar =true;
      }
    onSelected(dietas_id: number): void {
    this.dietas_id = dietas_id;
    this.selectedDieta = new DietaDetail();
    this.dietaService.getDietaDetail(dietas_id).subscribe(o => this.selectedDieta = o);
  }

    /**
     * This will initialize the component by retrieving the list of halls from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
      this.mostrarCrear=false;
      this.mostrarEditar=false;
     
      this.selectedDieta = new DietaDetail();
        this.getDietas();
    }
   

}
