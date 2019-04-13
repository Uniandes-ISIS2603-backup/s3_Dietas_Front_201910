import { Component, OnInit } from '@angular/core';
import { TipoDietaService } from '../tipo-dieta.service';
import { Router } from '@angular/router';
import { TipoDieta } from '../tipo-dieta';


@Component({
  selector: 'tipo-dieta-listar',
  templateUrl: './tipo-dieta-listar.component.html',
  styleUrls: ['./tipo-dieta-listar.component.css']
})
export class TipoDietaListarComponent implements OnInit {

  constructor(private tipoDietaService:TipoDietaService, private router:Router) { }
  tiposDietas:TipoDieta[];
  

  getTipoDietas():void{
    this.tipoDietaService.getTipoDietas().subscribe(o =>this.tiposDietas = o)
  }
  ngOnInit() {
    this.getTipoDietas();
  }

}
