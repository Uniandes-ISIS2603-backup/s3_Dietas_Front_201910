import { Component, OnInit, OnChanges, EventEmitter, Output, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FotoService } from '../foto.service';
import { Foto } from '../foto';

@Component({
  selector: 'app-foto-editar',
  templateUrl: './foto-editar.component.html',
  styleUrls: ['./foto-editar.component.css']
})
export class FotoEditarComponent implements OnInit, OnChanges {

  /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param fotoService The fotos' services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
 
    private fotoService: FotoService,
    private toastrService: ToastrService,
) {}

/**
* The foto id as received from the parent component
*/
@Input() foto_id: number;

/**
* The output which tells the parent component
* that the user no longer wants to create an foto
*/
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user updated a new foto
*/
@Output() update = new EventEmitter();


/**
    * The foto to edit
    */
   foto: Foto;

/**
    * Retrieves the information of the foto
    */
   getFoto(): void {
    this.fotoService.getFoto(this.foto_id)
        .subscribe(fo => {
            this.foto = fo;
        });
}

  /**
    * Updates the information of the foto
    */
   editFoto(): void {
    
    this.fotoService.updateFoto(this.foto)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The foto's information was updated", "Foto edition");
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
    this.foto = new Foto();
}

/**
* This function will be called when the user chooses another foto to edit
*/
ngOnChanges() {
    this.ngOnInit();
}

}
