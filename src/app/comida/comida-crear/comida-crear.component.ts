import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { ComidaService } from '../comida.service';
import { Comida } from '../comida';

@Component({
  selector: 'app-comida-crear',
  templateUrl: './comida-crear.component.html',
  styleUrls: ['./comida-crear.component.css']
})
export class ComidaCrearComponent implements OnInit {

     /**
    * Constructor for the component
    * @param comidaService The foto' services provider
    * @param toastrService The toastr to show messages to the user 
    */
   constructor(
    private comidaService: ComidaService,
    private toastrService: ToastrService
) {}

  
/**
* The new comida
*/
comida: Comida;

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
* Creates a new comida
*/
createComida(): Comida {
    this.comidaService.createComida(this.comida)
        .subscribe((comida) => {
            this.comida = comida;
            this.create.emit();
            this.toastrService.success("The comida was created", "Comida creation");
        }, err => {
            this.toastrService.error(err, "Error");
        });
    return this.comida;
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
    this.comida = new Comida();
}

}
