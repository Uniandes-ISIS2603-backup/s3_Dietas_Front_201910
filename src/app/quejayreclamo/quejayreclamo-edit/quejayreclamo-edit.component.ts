import {Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { QuejaYReclamoService } from '../quejayreclamo.service';
import {ToastrService} from 'ngx-toastr';
import { QuejaYReclamo } from '../quejayreclamo';

@Component({
  selector: 'app-quejayreclamo-edit',
  templateUrl: './quejayreclamo-edit.component.html',
  styleUrls: ['./quejayreclamo-edit.component.css']
})
export class QuejayreclamoEditComponent implements OnInit {
 /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param halloffameService The halls' services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
 
    private quejayReclamoService: QuejaYReclamoService,
    private toastrService: ToastrService,
) {}

/**
* The halloffame id as received from the parent component
*/
@Input()queja_id: number;

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
   quejaYReclamo: QuejaYReclamo;

/**
    * Retrieves the information of the halloffame
    */
   getQueja(): void {
    this.quejayReclamoService.getQueja(this.queja_id)
        .subscribe(fo => {
            this.quejaYReclamo = fo;
        });
}

  /**
    * Updates the information of the halloffame
    */
   editQueja(): void {
    
    this.quejayReclamoService.updateQueja(this.quejaYReclamo)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The queja's information was updated", "Queja edition");
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
    this.quejaYReclamo = new QuejaYReclamo();
    this.getQueja();
}

/**
* This function will be called when the user chooses another halloffame to edit
*/
ngOnChanges() {
    this.ngOnInit();
}

}
