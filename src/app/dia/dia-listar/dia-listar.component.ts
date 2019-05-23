import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DiaService } from '../dia.service';
import { Dia } from '../dia';
import { Comida } from '../../comida/comida';
import { DiaDetail } from '../dia-detail';
import { ComidaService } from '../../comida/comida.service';


@Component({
  selector: 'dia-listar',
  templateUrl: './dia-listar.component.html',
  styleUrls: ['./dia-listar.component.css']
})
export class DiaListarComponent implements OnInit {

  constructor(private diaService: DiaService  , private comidaService:ComidaService , private router: Router) { }
  mostrarCrear : boolean;

    idDia:number;
  dias:Dia[];
  diaActual:Dia;
  showEdit:boolean;
  comidas:Comida[];
  selectedDia : DiaDetail;

  getDias():void{
    this.diaService.getDias().subscribe(newDay=> this.dias=newDay);
  }

  getComidasDeDia(diaId:number):void{
    this.comidaService.getComidasDeDia(diaId).subscribe(o=>
      {
        this.comidas=o;
      })
  }

  ngOnInit() {
    this.getDias();
    this.showEdit=false;
    this.mostrarCrear=false;
    this.selectedDia= new DiaDetail();
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
      this.mostrarCrear=false;
  }
  onSelected(pDia_id:number):void{
    this.idDia= pDia_id;
    this.showEdit= true;
    this.diaService.getDiaDetail(pDia_id).subscribe(o=>
      {
        this.selectedDia= o;
      })
  }

  

}
