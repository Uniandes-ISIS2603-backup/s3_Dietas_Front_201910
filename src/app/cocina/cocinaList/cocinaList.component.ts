import { Component, OnInit, Input } from '@angular/core';
import {Cocina} from "../cocina";
import {CocinaService} from "../cocina.service";
import { Router } from '@angular/router';
import {NgxPermissionsModule} from 'ngx-permissions';

@Component({
  selector: 'app-cocina-list',
  templateUrl: './cocinaList.component.html',
  styleUrls: ['./cocinaList.component.css']
})
export class CocinaListComponent implements OnInit {

 /**
  * The list of cocinas to display
  */
@Input() cocinas: Cocina[];
mostrarCrear : boolean;
mostrarEditar : boolean;
/**
     * Constructor for the component
     * @param cocinaService The author's services provider
     */
constructor(private cocinaService:CocinaService, private router: Router) { }

/**
* This method retrieves all the cocinas to show them in the list
 */
getCocinas(): void{
this.cocinaService.getCocinas().subscribe(c => this.cocinas = c);
}


/**
 * The method which initializes the component
 */
  ngOnInit() {
    this.getCocinas();
  }

  mostrarCrearM():void{
    this.mostrarCrear=!this.mostrarCrear;
  }

  mostrarEditarM(): void{
    this.mostrarEditar = !this.mostrarEditar;
  }

}