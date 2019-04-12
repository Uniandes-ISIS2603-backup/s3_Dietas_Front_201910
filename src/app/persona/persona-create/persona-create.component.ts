import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonaService } from '../persona.service';
import {ToastrService} from 'ngx-toastr';
import { Persona } from '../persona';

@Component({
  selector: 'app-persona-create',
  templateUrl: './persona-create.component.html',
  styleUrls: ['./persona-create.component.css']
})
export class PersonaCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param halloffameService The halloffame' services provider
    * @param toastrService The toastr to show messages to the user 
    */
   constructor(
    private personaService: PersonaService,
    private toastrService: ToastrService
) {}

/**
* The new halloffame
*/
persona: Persona;

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
   createPersona(): Persona {
       this.personaService.createPersona(this.persona)
             .subscribe((persona) => {
               this.persona = persona;
               this.create.emit();
               this.toastrService.success("The persona was created", "Persona creation");
           }, err => {
               this.toastrService.error(err, "Error");
           });
       return this.persona;
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
       this.persona = new Persona();
   }

}
