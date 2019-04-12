import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuejaYReclamoService } from '../quejayreclamo.service';
import {ToastrService} from 'ngx-toastr';
import { QuejaYReclamo } from '../quejayreclamo';

@Component({
  selector: 'app-quejayreclamo-create',
  templateUrl: './quejayreclamo-create.component.html',
  styleUrls: ['./quejayreclamo-create.component.css']
})
export class QuejayreclamoCreateComponent implements OnInit {

   /**
    * Constructor for the component
    * @param quejaservicio The halloffame' services provider
    * @param toastrService The toastr to show messages to the user 
    */
   constructor(
    private quejaservicio: QuejaYReclamoService,
    private toastrService: ToastrService
) {}

/**
* The new halloffame
*/
quejaYReclamo: QuejaYReclamo;

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
   createQueja(): QuejaYReclamo {
       this.quejaservicio.createQueja(this.quejaYReclamo)
           .subscribe((quejaYReclamo) => {
               this.quejaYReclamo = quejaYReclamo;
               this.create.emit();
               this.toastrService.success("The queja was created", "Queja creation");
           }, err => {
               this.toastrService.error(err, "Error");
           });
       return this.quejaYReclamo;
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
       this.quejaYReclamo = new QuejaYReclamo();
   }


}
