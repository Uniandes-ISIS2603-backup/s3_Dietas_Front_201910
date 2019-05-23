import { Component, OnInit } from '@angular/core';
import { ComidaService } from '../comida.service';

import { Comida } from '../comida';

@Component({
  selector: 'app-comidalistar',
  templateUrl: './comidalistar.component.html',
  styleUrls: ['./comidalistar.component.css']
})
export class ComidalistarComponent implements OnInit {


  /**
   * Constructor for the component
   * @param ComidaService The author's services provider
   */
  constructor(private ComidaService: ComidaService) { }


  mostrarCrear: boolean;

  mostrarEditar: boolean;


  mostrarCrearM(): void {
    this.mostrarCrear = !this.mostrarCrear;

  }
  mostrarEditarM(id: number): void {
    this.mostrarEditar = !this.mostrarEditar;
    this.comida_id = id;
  }
  /**
   * The id of the comida
   */
  comida_id: number;

  /**
   * The list of Comida which belong to Dietas
   */
  comidas: Comida[];
  /**
  * Asks the service to update the list of Comidas
  */
  getComidas(): void {
    this.ComidaService.getComidas().subscribe(theComidas =>
      this.comidas = theComidas);
  }
  /**
   * This will initialize the component by retrieving the list of editorials from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.mostrarCrear = false;
    this.mostrarEditar = false;
    this.getComidas();
  }

}