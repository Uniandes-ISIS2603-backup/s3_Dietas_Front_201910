import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PagoService } from '../pago.service';
import {ToastrService} from 'ngx-toastr';
import { Pago } from '../pago';

@Component({
  selector: 'app-pago-create',
  templateUrl: './pago-create.component.html',
  styleUrls: ['./pago-create.component.css']
})
export class PagoCreateComponent implements OnInit {

  
  /**
    * Constructor for the component
    * @param suspensionService The pago' services provider
    * @param toastrService The toastr to show messages to the user 
    */
   constructor(
    private pagoService: PagoService,
    private toastrService: ToastrService
) {}

/**
* The new pago
*/
pago: Pago;

 /**
    * The output which tells the parent component
    * that the user no longer wants to create a pago
    */
   @Output() cancel = new EventEmitter();
   @Output() create = new EventEmitter();


       /**
   * Creates a new pago
   */
  createPago(): Pago {
    this.pagoService.createPago(this.pago)
        .subscribe((pago) => {
            this.pago = pago;
            this.create.emit();
            this.toastrService.success("The pago was created", "Pago creation");
        }, err => {
            this.toastrService.error(err, "Error");
        });
    return this.pago;
}


 /**
   * Informs the parent component that the user no longer wants to create a pago
   */
  cancelCreation(): void {
    this.cancel.emit();
}

  /**
   * This function will initialize the component
   */
  ngOnInit() {
    this.pago = new Pago();
}


}
