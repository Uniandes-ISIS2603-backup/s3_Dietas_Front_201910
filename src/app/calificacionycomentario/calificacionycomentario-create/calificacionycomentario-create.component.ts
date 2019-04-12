import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalificacionycomentarioService } from '../calificacionycomentario.service';
import {ToastrService} from 'ngx-toastr';
import { Calificacionycomentario } from '../calificacionycomentario';

@Component({
  selector: 'app-calificacionycomentario-create',
  templateUrl: './calificacionycomentario-create.component.html',
  styleUrls: ['./calificacionycomentario-create.component.css']
})
export class CalificacionycomentarioCreateComponent implements OnInit {

 
 /**
    * Constructor for the component
    * @param suspensionService The halloffame' services provider
    * @param toastrService The toastr to show messages to the user 
    */
   constructor(
    private calificacionycomentarioService: CalificacionycomentarioService,
    private toastrService: ToastrService
) {}

/**
* The new calificacionycomentario
*/
calificacionycomentario: Calificacionycomentario;


/**
    * The output which tells the parent component
    * that the user no longer wants to create an halloffame
    */
   @Output() cancel = new EventEmitter();
   @Output() create = new EventEmitter();


     /**
   * Creates a new calificaionycomentario
   */
  createCalificacionycomentario(): Calificacionycomentario {
    this.calificacionycomentarioService.createCalificacionycomentario(this.calificacionycomentario)
        .subscribe((calificacionycomentario) => {
            this.calificacionycomentario = calificacionycomentario;
            this.create.emit();
            this.toastrService.success("The calificacionycomentario was created", "calificacionycomentario creation");
        }, err => {
            this.toastrService.error(err, "Error");
        });
    return this.calificacionycomentario;
}


 
 /**
   * Informs the parent component that the user no longer wants to create an cocina
   */
  cancelCreation(): void {
    this.cancel.emit();
}

  /**
   * This function will initialize the component
   */
  ngOnInit() {
    this.calificacionycomentario = new Calificacionycomentario();
}
}




  




  

 


 




