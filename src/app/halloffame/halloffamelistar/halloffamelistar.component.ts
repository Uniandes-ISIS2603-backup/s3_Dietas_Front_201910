import { Component, OnInit } from '@angular/core';

import { HalloffameService } from '../halloffame.service';

import { Halloffame} from '../halloffame';


@Component({
  selector: 'app-halloffamelistar',
  templateUrl: './halloffamelistar.component.html',
  styleUrls: ['./halloffamelistar.component.css']
})
export class HalloffamelistarComponent implements OnInit{

/**
     * Constructor for the component
     * @param halloffameService The author's services provider
     */
    constructor(private halloffameService: HalloffameService) { }

   /**
     * The list of editorials which belong to the BookStore
     */
    halls: Halloffame[];
 /**
     * Asks the service to update the list of editorials
     */
    getHalls(): void {
        this.halloffameService.getHalls().subscribe(theHalls => 
        this.halls = theHalls);
    }
    /**
     * This will initialize the component by retrieving the list of editorials from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getHalls();
    }
}