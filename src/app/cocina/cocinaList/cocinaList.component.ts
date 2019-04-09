import { Component, OnInit, Input } from '@angular/core';
import {Cocina} from "../cocina";
import {CocinaService} from "../cocina.service";

@Component({
  selector: 'app-cocina-list',
  templateUrl: './cocina-list.component.html',
  styleUrls: ['./cocina-list.component.css']
})
export class CocinaListComponent implements OnInit {

 /**
  * The list of cocinas to display
  */
@Input() cocinas: Cocina[];

 /**
* The component's constructor
 */
constructor(private cocinaService:CocinaService) { }

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


}