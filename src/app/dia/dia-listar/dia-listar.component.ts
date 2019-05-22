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
  mostrarCrear : boolean;

    idDia:number;
  dias:Dia[];
  diaActual:Dia;
  showEdit:boolean;

  getDias():void{
    this.diaService.getDias().subscribe(newDay=> this.dias=newDay);
  }

  ngOnInit() {
    this.getDias();
    this.showEdit=false;
    this.mostrarCrear=false;
    this.diaActual= new Dia();
  }

  showHideEdit(id:number): void {
    this.mostrarCrear=!this.mostrarCrear
    this.onSelected(id);
    console.log("id: " + id);
    console.log("diasId" + this.idDia)
}
  mostrarCrearM():void{
    this.mostrarCrear=!this.mostrarCrear;
  }
  updateDia()
  {
      this.showEdit = false;
  }
  onSelected(pDia_id:number):void{
    this.idDia= pDia_id;
    this.showEdit= true;
    this.diaService.getDia(pDia_id).subscribe(o=>
      {
        this.diaActual= o;
        console.log("aaa:   " + this.diaActual.id);
      })
  }

  

}
