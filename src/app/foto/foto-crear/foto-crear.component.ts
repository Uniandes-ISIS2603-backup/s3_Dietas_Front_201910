import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { FotoService } from '../foto.service';
import { Foto } from '../foto';

@Component({
  selector: 'app-foto-crear',
  templateUrl: './foto-crear.component.html',
  styleUrls: ['./foto-crear.component.css']
})
export class FotoCrearComponent implements OnInit {

   /**
    * Constructor for the component
    * @param fotoService The foto' services provider
    * @param toastrService The toastr to show messages to the user 
    */
   constructor(
    private fotoService: FotoService,
    private toastrService: ToastrService
) {}

  
/**
* The new foto
*/
foto: Foto;

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
* Creates a new foto
*/
createFoto(): Foto {
    this.fotoService.createFoto(this.foto)
        .subscribe((foto) => {
            this.foto = foto;
            this.create.emit();
            this.toastrService.success("The foto was created", "Foto creation");
        }, err => {
            this.toastrService.error(err, "Error");
        });
    return this.foto;
}

/**
* Informs the parent component that the user no longer wants to create a foto
*/
cancelCreation(): void {
    this.cancel.emit();
}

/**
* This function will initialize the component
*/
ngOnInit() {
    this.foto = new Foto();
}

}
