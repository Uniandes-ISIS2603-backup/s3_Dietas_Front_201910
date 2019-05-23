import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DietaService} from '../dieta.service';
import {Dieta} from '../dieta';
import {DietaDetail} from '../dieta-detail';
import { Suspension } from '../../Suspension/Suspension';
import { Semana } from '../../Semana/Semana';

@Component({
    selector: 'app-dieta-detail',
    templateUrl: './dieta-detail.component.html',
    styleUrls: ['./dieta-detail.component.css']
})
export class DietaDetailComponent implements OnInit {

   /**
  * The component's constructor
  * @param dietaService The editorial's service
  * @param route The route element which helps to obtain the editorial's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private dietaService: DietaService,
    private route: ActivatedRoute
  ) { }


   /**
  * The dieta whose details we want to show
  */
 @Input() dietaDetail: DietaDetail;

   /**
  * The dieta (x2) whose details we want to show
  */

 @Input() suspensiones: Suspension[];
 @Input() semanas: Semana[];


 /**
 * The dieta's id retrieved from the address
 */
    dieta_id: number;


    /**
  * The method which retrieves the books of an editorial
  */
  //getDietaDetail(): void {
  //  this.dietaService.getDietaDetail(this.dieta_id)
  //    .subscribe(x => {
  //      this.dietaDetail = x
  //    });
  //}

  onLoad(params) {}
  ngOnDestroy() {}
/**
  * The method which initializes the component
  * We need to initialize the editorial so it is never considered as undefined
  */
 ngOnInit() {
//    this.dieta_id = +this.route.snapshot.paramMap.get('id');
//    if (this.dieta_id) {
//      this.dietaDetail = new DietaDetail();
//      this.getDietaDetail();
//    }

  }

}