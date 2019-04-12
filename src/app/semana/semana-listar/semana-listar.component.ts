import { Component, OnInit } from '@angular/core';

import{Router} from '@angular/router';
import{ SemanaService} from '../semana.service';
import{Semana} from '../semana';

@Component({
  selector: 'semana-listar',
  templateUrl: './semana-listar.component.html',
  styleUrls: ['./semana-listar.component.css']
})
export class SemanaListarComponent implements OnInit {

  semanas: Semana[];
  constructor(private semanaService: SemanaService, private router:Router) { }

  getSemanas():void{
    this.semanaService.getDias().subscribe(theWeeks=> this.semanas = theWeeks);
  }
  ngOnInit() {
    this.getSemanas();
  }

}
