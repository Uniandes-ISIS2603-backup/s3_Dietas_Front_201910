import { Component, OnInit, Input } from '@angular/core';
import {Calificacionycomentario} from "../calificacionycomentario";
import {CalificacionycomentarioService } from "../calificacionycomentario.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-calificacionycomentario-list',
  templateUrl: './calificacionycomentario-list.component.html',
  styleUrls: ['./calificacionycomentario-list.component.css']
})
export class CalificacionycomentarioListComponent implements OnInit {


@Input() calificacionesycomentarios: Calificacionycomentario[];


/**
     * Constructor for the component
     * @param cocinaService The author's services provider
     */
constructor(private calificacionycomentarioService:CalificacionycomentarioService, private router: Router) { }


getCalificacionesycomentarios(): void{
this.calificacionycomentarioService.getCalificacionesycomentarios().subscribe(c => this.calificacionesycomentarios = c);
}

ngOnInit() {
this.getCalificacionesycomentarios();
}


}