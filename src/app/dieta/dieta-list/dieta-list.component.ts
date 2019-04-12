import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';


import {Dieta} from '../../dieta/dieta';
import {DietaService} from '../../dieta/dieta.service';
@Component({
    selector: 'app-dieta-list',
    templateUrl: './dieta-list.component.html',
    styleUrls: ['./dieta-list.component.css']
})
export class DietaListComponent implements OnInit {

    /**
    * The list of dietas to display
    */
    @Input() dietas: Dieta[];

    /**
    * The component's constructor
    */
    constructor(private dietaService: DietaService, private route: ActivatedRoute) {}

    alldietas: string = 'no';
    /**
    * This method retrieves all the dietas in the App to show them in the list
    */
    getDietas(): void {
        this.dietaService.getDietas()
            .subscribe(dietas => {
                this.dietas = dietas;
            });
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
        this.route.queryParams
            .filter(params => params.allbooks)
            .subscribe(params => {
                console.log(params);

                this.alldietas = params.alldietas;
                console.log(this.alldietas);
            });
        if (this.alldietas == 'yes') {
            console.log("alldietas");

            this.getDietas();
        }
    }

}
