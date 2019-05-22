import { Component, OnInit, Input } from '@angular/core';
import {Suspension} from "../suspension";
import {SuspensionService} from "../suspension.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-suspension-list',
  templateUrl: './suspensionList.component.html',
  styleUrls: ['./suspensionList.component.css']
})
export class SuspensionListComponent implements OnInit {

 /**
  * The list of suspensiones to display
  */
@Input() suspensiones: Suspension[];
mostrarCrear : boolean;
mostrarEditar : boolean;


/**
     * Constructor for the component
     * @param suspensionService The author's services provider
     */
constructor(private suspensionService:SuspensionService, private router: Router) { }

 

/**
* This method retrieves all the suspensions in the dieta to show them in the list
 */
getSuspensiones(): void{
this.suspensionService.getSuspensiones().subscribe(susp => this.suspensiones = susp);
}

 /**
 * The method which initializes the component
 */
ngOnInit() {
  this.getSuspensiones();
}

mostrarCrearM():void{
  this.mostrarCrear=!this.mostrarCrear;
}

mostrarEditarM(): void{
  this.mostrarEditar = !this.mostrarEditar;
}

}