import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CocinaService } from '../cocina.service';
import {ToastrService} from 'ngx-toastr';
import { Cocina } from '../cocina';

@Component({
  selector: 'app-cocina-create',
  templateUrl: './cocina-create.component.html',
  styleUrls: ['./cocina-create.component.css']
})
export class CocinaCreateComponent implements OnInit {

  
  /**
    * Constructor for the component
    * @param suspensionService The halloffame' services provider
    * @param toastrService The toastr to show messages to the user 
    */
   constructor(
    private cocinaService: CocinaService,
    private toastrService: ToastrService
) {}

/**
* The new cocina
*/
cocina: Cocina;

 /**
    * The output which tells the parent component
    * that the user no longer wants to create an halloffame
    */
   @Output() cancel = new EventEmitter();
   @Output() create = new EventEmitter();


       /**
   * Creates a new cocina
   */
  createCocina(): Cocina {
    this.cocinaService.createCocina(this.cocina)
        .subscribe((cocina) => {
            this.cocina = cocina;
            this.create.emit();
            this.toastrService.success("The Cocina was created", "Cocina creation");
        }, err => {
            this.toastrService.error(err, "Error");
        });
    return this.cocina;
}


 /**
   * Informs the parent component that the user no longer wants to create an cocina
   */
  cancelCreation(): void {
    this.cancel.emit();
}

  /**
   * This function will initialize the component
   */
  ngOnInit() {
    this.cocina = new Cocina();
}


}



  




  

 


 



