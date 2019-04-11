import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SuspensionService } from '../suspension.service';
import {ToastrService} from 'ngx-toastr';
import { Suspension } from '../suspension';

@Component({
  selector: 'app-suspension-create',
  templateUrl: './suspension-create.component.html',
  styleUrls: ['./suspension-create.component.css']
})
export class SuspensionCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param suspensionService The halloffame' services provider
    * @param toastrService The toastr to show messages to the user 
    */
   constructor(
    private suspensionService: SuspensionService,
    private toastrService: ToastrService
) {}


/**
* The new halloffame
*/
suspension: Suspension;

   /**
    * The output which tells the parent component
    * that the user no longer wants to create an halloffame
    */
   @Output() cancel = new EventEmitter();
   @Output() create = new EventEmitter();

     /**
   * Creates a new halloffame
   */
  createSuspension(): Suspension {
    this.suspensionService.createSuspension(this.suspension)
        .subscribe((suspension) => {
            this.suspension = suspension;
            this.create.emit();
            this.toastrService.success("The suspension was created", "Suspension creation");
        }, err => {
            this.toastrService.error(err, "Error");
        });
    return this.suspension;
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
    this.suspension = new Suspension();
}

}
