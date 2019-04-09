import { Component, OnInit, Input } from '@angular/core';
import {Calificacionycomentario} from "../calificacionycomentario";
import {CalificacionycomentarioService } from "../calificacionycomentario.service";

@Component({
  selector: 'app-calificacionycomentario-list',
  templateUrl: './calificacionycomentario-list.component.html',
  styleUrls: ['./calificacionycomentario-list.component.css']
})
export class CalificacionycomentarioListComponent implements OnInit {

/**
  * The list of calificaciones y comentarios to display
  */
 @Input() calificacionesycomentarios: Calificacionycomentario[];

/**
  * The component's constructor
  */
 constructor(private calificacionycomentarioService:CalificacionycomentarioService) { }


/**
* This method retrieves all the calificacionesycomentarios in the persona to show them in the list
 */
getCalificacionesycomentarios(): void{
this.calificacionycomentarioService.getCalificacionesycomentarios().subscribe(c => this.calificacionesycomentarios = c);
}

 /**
 * The method which initializes the component
 */
ngOnInit() {
this.getCalificacionesycomentarios();
}


}