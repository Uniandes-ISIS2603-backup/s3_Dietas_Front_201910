import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {DietaService} from '../dieta.service';
//import {SemanaService} from '../../semana/semana.service';
import {SuspensionService} from '../../suspension/suspension.service';
import {Dieta} from '../dieta';
import {Persona} from '../../persona/persona';
import {Suspension} from '../../suspension/suspension';
import {Semana} from '../../semana/semana';



@Component({
    selector: 'app-dieta-create',
    templateUrl: './dieta-create.component.html',
    styleUrls: ['./dieta-create.component.css']
})
export class DietaCreateComponent implements OnInit {

     /**
    * Constructor for the component
    * @param dietaService The halloffame' services provider
    * @param toastrService The toastr to show messages to the user 
    */
   constructor(
    private dietaService: DietaService,
    private toastrService: ToastrService
) {}


/**
* The new halloffame
*/
dieta: Dieta;

   /**
    * The output which tells the parent component
    * that the user no longer wants to create an halloffame
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new halloffame
   */
   @Output() create = new EventEmitter();


/**
   * Creates a new halloffame
   */
  createDieta(): Dieta {
    this.dietaService.createDieta(this.dieta)
        .subscribe((dietax) => {
            this.dieta = dietax;
            this.create.emit();
            this.toastrService.success("The dieta was created", "dieta creation");
        }, err => {
            this.toastrService.error(err, "Error");
        });
    return this.dieta;
}




   /**
   * Informs the parent component that the user no longer wants to create an hall
   */
  cancelCreation(): void {
    this.cancel.emit();
}

/**
* This function will initialize the component
*/
ngOnInit() {
    this.dieta = new Dieta();
}





}
