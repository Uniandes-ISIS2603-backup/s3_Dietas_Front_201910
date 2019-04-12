import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import {Dieta} from '../../dieta/dieta';
import {DietaService} from '../../dieta/dieta.service';
import { DietaDetail } from '../dieta-detail';


@Component({
    selector: 'app-dieta-list',
    templateUrl: './dieta-list.component.html',
    styleUrls: ['./dieta-list.component.css']
})
export class DietaListComponent implements OnInit {

/**
     * Constructor for the component
     * @param dietaService The author's services provider
     */
    constructor(private dietaService: DietaService, private router: Router) { }

   /**
     * The list of halls which belong to the BookStore
     */
    dietas: Dieta[];

    dietas_id: number;
    selectedDieta: DietaDetail;
 /**
     * Asks the service to update the list of halls
     */
    getDietas(): void {
        this.dietaService.getDietas().subscribe(d => 
        this.dietas = d);
    }


    onSelected(dietas_id: number): void {
    this.dietas_id = dietas_id;
    this.selectedDieta = new DietaDetail();
    this.dietaService.getDietaDetail(dietas_id).subscribe(o => this.selectedDieta = o);
  }

    /**
     * This will initialize the component by retrieving the list of halls from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getDietas();
    }
   

}
