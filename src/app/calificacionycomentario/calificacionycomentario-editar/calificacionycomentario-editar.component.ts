import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { CalificacionycomentarioService } from '../calificacionycomentario.service';
import { ToastrService } from 'ngx-toastr';
import { Calificacionycomentario } from '../calificacionycomentario';

@Component({
  selector: 'app-calificacionycomentario-editar',
  templateUrl: './calificacionycomentario-editar.component.html',
  styleUrls: ['./calificacionycomentario-editar.component.css']
})
export class CalificacionycomentarioEditarComponent implements OnInit {

  
/**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param calificacionycomentarioService The halls' services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
 
    private  calificacionycomentarioService: CalificacionycomentarioService,
    private toastrService: ToastrService,
) {}



/**
* The cocina id as received from the parent component
*/
@Input() calificacionycomentario_id: number;


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
    * The cocina to update
    */
   calificacionycomentario: Calificacionycomentario;


/**
    * Retrieves the information of the calificacionycomentario
    */
   getCalificacionycomentario(): void {
    this.calificacionycomentarioService.getCalificacionycomentario(this.calificacionycomentario_id)
        .subscribe(fo => {
            this.calificacionycomentario = fo;
        });
}


  /**
    * Updates the information of the cocina
    */
   updateCalificacionycomentario(): void {
    
    this.calificacionycomentarioService.updateCalificacionycomentario(this.calificacionycomentario)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The calificacionycomentario's information was updated", "Calificacionycomentario edition");
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
  this.calificacionycomentario = new Calificacionycomentario();
}

/**
* This function will be called when the user chooses another halloffame to edit
*/
ngOnChanges() {
  this.ngOnInit();
}
  


}


