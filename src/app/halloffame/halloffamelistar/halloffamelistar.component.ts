import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { HalloffameService } from '../halloffame.service';

import { Halloffame} from '../halloffame';

import { HalloffameDetail } from '../halloffame-detail';


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
    constructor(private halloffameService: HalloffameService, private router: Router) { }

   /**
     * The list of halls which belong to the BookStore
     */
    halls: Halloffame[];

    halls_id: number;
    selectedHall: HalloffameDetail;
 /**
     * Asks the service to update the list of halls
     */
    getHalls(): void {
        this.halloffameService.getHalls().subscribe(theHalls => 
        this.halls = theHalls);
    }


    onSelected(halls_id: number): void {
    this.halls_id = halls_id;
    this.selectedHall = new HalloffameDetail();
    this.halloffameService.getHalloffameDetail(halls_id).subscribe(o => this.selectedHall = o);
  }

    /**
     * This will initialize the component by retrieving the list of halls from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getHalls();
    }
}