import { Component,OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { PersonaService } from '../persona.service';
import {ToastrService} from 'ngx-toastr';
import { Persona } from '../persona';

@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['./persona-edit.component.css']
})
export class PersonaEditComponent implements OnInit {
 
 /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param personaService The halls' services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
 
    private personaService: PersonaService,
    private toastrService: ToastrService,
) {}

/**
* The halloffame id as received from the parent component
*/
@Input() personas_id: number;

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
   persona: Persona;

/**
    * Retrieves the information of the halloffame
    */
   getPersona(): void {
    console.log("es"+this.personas_id);
    this.personaService.getPersona(this.personas_id)
        .subscribe(fo => {
            this.persona = fo;
        });
}

  /**
    * Updates the information of the halloffame
    */
   editPersona(): void {
    console.log("entré"+this.persona.id)
    this.personaService.updatePersona(this.persona)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The persona's information was updated", "Persona edition");
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
    this.persona = new Persona();
    this.getPersona();
}

/**
* This function will be called when the user chooses another halloffame to edit
*/
ngOnChanges() {
    this.ngOnInit();
}


}