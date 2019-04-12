import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { PagoService } from '../pago.service';
import { ToastrService } from 'ngx-toastr';
import { Pago } from '../pago';

@Component({
  selector: 'app-pago-edit',
  templateUrl: './pago-edit.component.html',
  styleUrls: ['./pago-edit.component.css']
})
export class PagoEditComponent implements OnInit, OnChanges {

  /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param pagoService The pago' services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
 
    private  pagoService: PagoService,
    private toastrService: ToastrService,
) {}


/**
* The pago id as received from the parent component
*/
@Input() pago_id: number;


/**
* The output which tells the parent component
* that the user no longer wants to create a pago
*/
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user updated a new pago
*/
@Output() update = new EventEmitter();


/**
    * The pago to update
    */
   pago: Pago;


/**
    * Retrieves the information of the pago
    */
   getCPago(): void {
    this.pagoService.getPago(this.pago_id)
        .subscribe(fo => {
            this.pago = fo;
        });
}


  /**
    * Updates the information of the pago
    */
   updatePago(): void {
    
    this.pagoService.updatePago(this.pago)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The pago's information was updated", "Pago edition");
            });
}



/**
* Emits the signal to tell the parent component that the
* user no longer wants to create an pago
*/
cancelEdition(): void {
  this.cancel.emit();
}


/**
* This function will initialize the component
*/
ngOnInit() {
  this.pago = new Pago();
}

/**
* This function will be called when the user chooses another pago to edit
*/
ngOnChanges() {
  this.ngOnInit();
}
  

}
