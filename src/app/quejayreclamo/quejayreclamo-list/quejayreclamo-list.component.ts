import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { QuejaYReclamoService } from '../quejayreclamo.service';

import { QuejaYReclamo} from '../quejayreclamo';


@Component({
  selector: 'app-quejayreclamo-list',
  templateUrl: './quejayreclamo-list.component.html',
  styleUrls: ['./quejayreclamo-list.component.css']
})
export class QuejayreclamoListComponent implements OnInit {

 /**
     * Constructor for the component
     * @param quejaYReclamoService The author's services provider
     */
    constructor(private quejaYReclamoService: QuejaYReclamoService, private router: Router) { }

   /**
     * The list of halls which belong to the BookStore
     */
    quejas: QuejaYReclamo[];

 /**
     * Asks the service to update the list of halls
     */
    getQuejas(): void {
        this.quejaYReclamoService.getQuejas().subscribe(theHalls => 
        this.quejas = theHalls);
    }

    /**
     * This will initialize the component by retrieving the list of halls from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getQuejas();
    }

}
