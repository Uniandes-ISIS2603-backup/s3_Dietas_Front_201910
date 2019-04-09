import { Component, OnInit, Input } from '@angular/core';
import {Suspension} from "../suspension";
import {SuspensionService} from "../suspension.service";

@Component({
  selector: 'app-suspension-list',
  templateUrl: './suspension-list.component.html',
  styleUrls: ['./suspension-list.component.css']
})
export class SuspensionListComponent implements OnInit {

 /**
  * The list of suspensiones to display
  */
@Input() suspensiones: Suspension[];


 /**
  * The component's constructor
  */
constructor(private suspensionService:SuspensionService) { }


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


}