import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Foto } from '../../foto/foto';
import { Calificacionycomentario } from '../../calificacionycomentario/calificacionycomentario';
import { QuejaYReclamo } from '../../quejayreclamo/quejayreclamo';
import { Pago } from '../../Pago/Pago';
import { Dieta } from '../../Dieta/Dieta';
import { PersonaService } from '../persona.service';
import { Persona } from '../persona';
import { PersonaDetail } from '../persona-detail';
import { QuejaYReclamoService } from '../../quejayreclamo/quejayreclamo.service';
import { QuejayreclamoEditComponent } from '../../quejayreclamo/quejayreclamo-edit/quejayreclamo-edit.component';
import {ToastrService} from 'ngx-toastr';


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
    private quejaService: QuejaYReclamoService,
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) { }
  /**
* The output which tells the parent component
* that the user no longer wants to create an halloffame
*/
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user updated a new halloffame
*/
@Output() update = new EventEmitter();

    mostrarEditarQueja : boolean; 

    mostrarEditarQ(id:number): void{
      this.mostrarEditarQueja = !this.mostrarEditarQueja;
      this.quejaId=id;
     
    }
  /**
  * The editorial whose details we want to show
  */
  personaDetail: PersonaDetail;

  @Input() fotos2: Foto[];
  @Input() calificacionesYComentarios: Calificacionycomentario[];
  @Input() quejasYReclamos: QuejaYReclamo[];
  @Input() pagos: Pago[];
  @Input() dietas: Dieta[];
  @Input() persona_id: number;
  fotoId:number;
  calificacionId:number;
  quejaId: number;
  pagoId:number;
  selectedQueja:QuejaYReclamo;
  selectedCalificacion:Calificacionycomentario;
  selectedPago:Pago;
  selectedFoto:Foto;

  /**
  * The editorial's id retrieved from the address
  */


  /**
    * Retrieves the information of the halloffame
    */
   getQueja(): void {
    this.quejaService.getQueja(this.quejaId)
        .subscribe(fo => {
            this.selectedQueja = fo;
        });
}

  /**
    * Updates the information of the halloffame
    */
   editQueja(): void {
    this.quejaService.updateQueja(this.selectedQueja)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The queja's information was updated", "Queja edition");
            });
}

  onLoad(params) {

  }
  ngOnInit() {
   // this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
//this.loader.unsubscribe();
  }

}