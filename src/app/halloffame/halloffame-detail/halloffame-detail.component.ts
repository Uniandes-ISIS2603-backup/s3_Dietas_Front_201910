import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HalloffameService } from '../halloffame.service';
import { Halloffame } from '../halloffame';
import { HalloffameDetail } from '../halloffame-detail';
import { Persona } from '../../persona/persona';

@Component({
  selector: 'app-halloffame-detail',
  templateUrl: './halloffame-detail.component.html',
  styleUrls: ['./halloffame-detail.component.css']
})
export class HalloffameDetailComponent implements OnInit {

  /**
  * The component's constructor
  * @param editorialService The editorial's service
  * @param route The route element which helps to obtain the editorial's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private halloffameService: HalloffameService,
    private route: ActivatedRoute
  ) { }

  /**
  * Las personas de cierto hall
  */
  @Input() personas: Persona[];



  /**
  * The editorial's id retrieved from the address
  */
  halloffame_id: number;

  /**
  * The method which retrieves the books of an editorial
  
  getHalloffameDetail(): void {
    this.halloffameService.getHalloffameDetail(this.halloffame_id)
      .subscribe(editorialDetail => {
        this.halloffameDetail = editorialDetail
      });
  }
  */

   /**
  * The method which initializes the component
  * We need to initialize the editorial so it is never considered as undefined
  */
  ngOnInit() {

   /**
    this.halloffame_id = +this.route.snapshot.paramMap.get('id');
    if (this.halloffame_id) {
      this.halloffameDetail = new HalloffameDetail();
      this.getHalloffameDetail();
    }
     */

  }
}