import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { HalloffameService } from '../halloffame.service';
import { ToastrService } from 'ngx-toastr';
import { Halloffame } from '../Halloffame';

@Component({
  selector: 'app-halloffame-editar',
  templateUrl: './halloffame-editar.component.html',
  styleUrls: ['./halloffame-editar.component.css']
})
export class HalloffameEditarComponent implements OnInit, OnChanges {

 /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param halloffameService The halls' services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
 
    private halloffameService: HalloffameService,
    private toastrService: ToastrService,
) {}

/**
* The halloffame id as received from the parent component
*/
@Input() halloffame_id: number;

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
    * The halloffame to edit
    */
   halloffame: Halloffame;

/**
    * Retrieves the information of the halloffame
    */
   getHalloffame(): void {
       console.log("este es el id del hall of fame en editar:"+ this.halloffame_id );
    this.halloffameService.getHalloffame(this.halloffame_id)
        .subscribe(fo => {
            this.halloffame = fo;
        });
}

  /**
    * Updates the information of the halloffame
    */
   editHalloffame(): void {
   
    console.log("este es el id del hall of fame en editar2:"+ this.halloffame_id );
    this.halloffameService.updateHalloffame(this.halloffame)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The hall's information was updated", "Hall edition");
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
    console.log(this.halloffame_id);
    this.halloffame = new Halloffame();
    this.getHalloffame();
}

/**
* This function will be called when the user chooses another halloffame to edit
*/
ngOnChanges() {
    console.log(this.halloffame_id);
    this.ngOnInit();
}

}