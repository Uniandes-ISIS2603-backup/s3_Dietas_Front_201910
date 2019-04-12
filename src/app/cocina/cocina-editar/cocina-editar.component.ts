import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { CocinaService } from '../cocina.service';
import { ToastrService } from 'ngx-toastr';
import { Cocina } from '../cocina';

@Component({
  selector: 'app-cocina-editar',
  templateUrl: './cocina-editar.component.html',
  styleUrls: ['./cocina-editar.component.css']
})
export class CocinaEditarComponent implements OnInit, OnChanges {

  /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param cocinaService The halls' services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
 
    private  cocinaService: CocinaService,
    private toastrService: ToastrService,
) {}


/**
* The cocina id as received from the parent component
*/
@Input() cocina_id: number;


/**
* The output which tells the parent component
* that the user no longer wants to create an halloffame
*/
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user updated a new halloffame
*/
@Output() update = new EventEmitter();


/**
    * The cocina to update
    */
  cocina: Cocina;


/**
    * Retrieves the information of the cocina
    */
   getCocina(): void {
    this.cocinaService.getCocina(this.cocina_id)
        .subscribe(fo => {
            this.cocina = fo;
        });
}


  /**
    * Updates the information of the cocina
    */
   updateCocina(): void {
    
    this.cocinaService.updateCocina(this.cocina)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The cocinas's information was updated", "Cocina edition");
            });
}



/**
* Emits the signal to tell the parent component that the
* user no longer wants to create an user
*/
cancelEdition(): void {
  this.cancel.emit();
}


/**
* This function will initialize the component
*/
ngOnInit() {
  this.cocina = new Cocina();
}

/**
* This function will be called when the user chooses another halloffame to edit
*/
ngOnChanges() {
  this.ngOnInit();
}
  

}
