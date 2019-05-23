import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Foto } from '../../foto/foto';
import { Calificacionycomentario } from '../../calificacionycomentario/calificacionycomentario';
import { QuejaYReclamo } from '../../quejayreclamo/quejayreclamo';
import { Pago } from '../../Pago/Pago';
import { Dieta } from '../../Dieta/Dieta';
import { PersonaService } from '../persona.service';
import { Persona } from '../persona';
import { PersonaDetail } from '../persona-detail';

@Component({
  selector: 'app-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.css']
})
export class PersonaDetailComponent implements OnInit {
 /**
  * The component's constructor
  * @param personaService The personas's service
  * @param route The route element which helps to obtain the persona's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private personaService: PersonaService,
    private route: ActivatedRoute
  ) { }

  /**
  * The editorial whose details we want to show
  */
  personaDetail: PersonaDetail;

  @Input() fotos2: Foto[];
  @Input() calificaciones: Calificacionycomentario[];
  @Input() quejasYReclamos: QuejaYReclamo[];
  @Input() pagos: Pago[];
  @Input() dietas: Dieta[];
  @Input() persona_id: number;

  /**
  * The editorial's id retrieved from the address
  */

   // loader:any
 // getPersonaDetail(): void {
 //   this.personaService.getPersonaDetail(this.persona_id)
 //     .subscribe(o => {
 //       this.personaDetail = o
    //  });
  //}

  onLoad(params) {

//    this.persona_id = parseInt(params['id']);
//    this.personaDetail = new PersonaDetail();
//    this.getPersonaDetail();
  }
  ngOnInit() {
   // this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
//this.loader.unsubscribe();
  }

}