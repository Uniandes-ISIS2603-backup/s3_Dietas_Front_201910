import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { QuejaYReclamoService } from '../quejaYReclamo.service';
import { QuejaYReclamo } from '../quejaYReclamo';


@Component({
  selector: 'app-queja-yreclamo-create',
  templateUrl: './queja-yreclamo-create.component.html',
  styleUrls: ['./queja-yreclamo-create.component.css']
})
export class QuejaYReclamoCreateComponent implements OnInit {

  
  /**
    * Constructor for the component
    * @param quejaYReclamoService The halloffame' services provider
    * @param toastrService The toastr to show messages to the user 
    */
   constructor(
    private quejaYReclamoService: QuejaYReclamoService,
    private toastrService: ToastrService
) {}

/**
* The new halloffame
*/
queja: QuejaYReclamo;

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
   createQuejaYReclamo(): QuejaYReclamo {
       this.quejaYReclamoService.createQuejaYReclamo(this.queja)
           .subscribe((queja) => {
               this.queja = queja;
               this.create.emit();
               this.toastrService.success("The Queja was created", "Queja creation");
           }, err => {
               this.toastrService.error(err, "Error");
           });
       return this.queja;
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
       this.queja = new QuejaYReclamo();
   }

}
