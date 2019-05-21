import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import{DiaService} from '../dia.service';
import{ToastrService}from 'ngx-toastr';
import{Dia} from '../dia';

@Component({
  selector: 'dia-edit',
  templateUrl: './dia-edit.component.html',
  styleUrls: ['./dia-edit.component.css']
})
export class DiaEditComponent implements OnInit, OnChanges {

  constructor(
    private diaService: DiaService,
    private toastrService: ToastrService
  ) {   }

  @Input() dia_id:number;


  @Output() cancel = new EventEmitter();
  @Output() update = new EventEmitter();

  dia:Dia;

getDia():void{
  this.diaService.getDia(this.dia_id)
    .subscribe(d=>{
      this.dia = d;
    });
  
}

  editDia():void{
    this.diaService.updateDia(this.dia)
    .subscribe(() =>{
      this.update.emit();
      this.toastrService.success("Se actualizó el día correctamente");
    });
  }

  cancelEdition():void{
    this.cancel.emit();
  }

  ngOnChanges(){
    this.ngOnInit();
  }
  ngOnInit() {
    this.dia = new Dia();
  }

}
