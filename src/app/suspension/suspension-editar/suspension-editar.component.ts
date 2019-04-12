import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { SuspensionService } from '../suspension.service';
import { ToastrService } from 'ngx-toastr';
import { Suspension } from '../suspension';

@Component({
  selector: 'app-suspension-editar',
  templateUrl: './suspension-editar.component.html',
  styleUrls: ['./suspension-editar.component.css']
})
export class SuspensionEditarComponent implements OnInit, OnChanges {

  
 /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param suspensionService The halls' services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
 
    private  suspensionService: SuspensionService,
    private toastrService: ToastrService,
) {}



/**
* The suspension id as received from the parent component
*/
@Input() suspension_id: number;


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
   suspension: Suspension;


   /**
    * Retrieves the information of the cocina
    */
   getSuspension(): void {
    this.suspensionService.getSuspension(this.suspension_id)
        .subscribe(fo => {
            this.suspension = fo;
        });
}


  /**
    * Updates the information of the cocina
    */
   updateSuspension(): void {
    
    this.suspensionService.updateSuspension(this.suspension)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The suspension's information was updated", "Suspension edition");
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
  this.suspension = new Suspension();
}

/**
* This function will be called when the user chooses another suspension to edit
*/
ngOnChanges() {
  this.ngOnInit();
}

}
