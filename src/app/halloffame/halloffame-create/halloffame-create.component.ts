import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HalloffameService } from '../halloffame.service';
import {ToastrService} from 'ngx-toastr';
import { Halloffame } from '../halloffame';


@Component({
  selector: 'app-halloffame-create',
  templateUrl: './halloffame-create.component.html',
  styleUrls: ['./halloffame-create.component.css']
})
export class HalloffameCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param halloffameService The halloffame' services provider
    * @param toastrService The toastr to show messages to the user 
    */
   constructor(
    private hallofFameService: HalloffameService,
    private toastrService: ToastrService
) {}


/**
* The new halloffame
*/
halloffame: Halloffame;

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
   createHalloffame(): Halloffame {
       this.hallofFameService.createHalloffame(this.halloffame)
           .subscribe((halloffame) => {
               this.halloffame = halloffame;
               this.create.emit();
               this.toastrService.success("The hall was created", "Hall creation");
           }, err => {
               this.toastrService.error(err, "Error");
           });
       return this.halloffame;
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
       console.log("entra en create");
       this.halloffame = new Halloffame();
   }

}
