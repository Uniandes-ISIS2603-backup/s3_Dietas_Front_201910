import { Component, OnInit } from '@angular/core';

import { FotoService } from '../foto.service';

import { Foto } from '../foto';

@Component({
  selector: 'app-fotolistar',
  templateUrl: './fotolistar.component.html',
  styleUrls: ['./fotolistar.component.css']
})
export class FotolistarComponent implements OnInit {

    /**
     * Constructor for the component
     * @param fotoService The author's services provider
     */
    constructor(private FotoService: FotoService) { }

    mostrarCrear : boolean;

    mostrarCrearM(): void{
        this.mostrarCrear = !this.mostrarCrear;
      }

    /**
     * The list of fotos which belong to Dietas
     */
    fotos: Foto[];
     /**
     * Asks the service to update the list of editorials
     */
    getFotos(): void {
        this.FotoService.getFotos().subscribe(theFotos => 
        this.fotos = theFotos);
    }
    /**
     * This will initialize the component by retrieving the list of editorials from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getFotos();
        this.mostrarCrear=false;
    }

}


