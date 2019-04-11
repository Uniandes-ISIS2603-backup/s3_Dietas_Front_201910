import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComidaService } from '../comida.service';
import { ToastrService } from 'ngx-toastr';
import { Comida } from '../comida';

@Component({
  selector: 'app-comida-editar',
  templateUrl: './comida-editar.component.html',
  styleUrls: ['./comida-editar.component.css']
})
export class ComidaEditarComponent implements OnInit {

  /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param comidaService The comidas' services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
 
    private comidaService: ComidaService,
    private toastrService: ToastrService,
) {}

/**
* The comida id as received from the parent component
*/
@Input() comida_id: number;

/**
* The output which tells the parent component
* that the user no longer wants to create an comida
*/
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user updated a new comida
*/
@Output() update = new EventEmitter();


/**
    * The comida to edit
    */
   comida: Comida;

/**
    * Retrieves the information of the comida
    */
   getComida(): void {
    this.comidaService.getComida(this.comida_id)
        .subscribe(fo => {
            this.comida = fo;
        });
}

  /**
    * Updates the information of the comida
    */
   editComida(): void {
    
    this.comidaService.updateComida(this.comida)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The comida's information was updated", "Comida edition");
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
    this.comida = new Comida();
}

/**
* This function will be called when the user chooses another comida to edit
*/
ngOnChanges() {
    this.ngOnInit();
}
}
