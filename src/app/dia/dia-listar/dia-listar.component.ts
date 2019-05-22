import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DiaService } from '../dia.service';
import { Dia } from '../dia';


@Component({
  selector: 'dia-listar',
  templateUrl: './dia-listar.component.html',
  styleUrls: ['./dia-listar.component.css']
})
export class DiaListarComponent implements OnInit {

  constructor(private diaService: DiaService  /** , private router: Router*/) { }

  dias:Dia[];

  getDias():void{
    this.diaService.getDias().subscribe(newDay=> this.dias=newDay);
  }

  ngOnInit() {
    this.getDias();
  }

}
