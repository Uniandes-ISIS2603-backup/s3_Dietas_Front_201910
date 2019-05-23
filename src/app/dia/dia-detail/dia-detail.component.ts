import { Component, OnInit, Input } from '@angular/core';
import { DiaService } from '../dia.service';
import { ActivatedRoute } from '@angular/router';
import { Comida } from '../../Comida/Comida';

@Component({
  selector: 'dia-detail',
  templateUrl: './dia-detail.component.html',
  styleUrls: ['./dia-detail.component.css']
})
export class DiaDetailComponent implements OnInit {

  constructor(
    private diaService:DiaService,

    private route : ActivatedRoute,
  ) { }

  @Input() comidas:Comida[];

  comida_id:number;

  ngOnInit() {
  }

}
