import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Dia } from '../dia';
import { DiaService } from '../dia.service';

@Component({
  selector: 'dia-create',
  templateUrl: './dia-create.component.html',
  styleUrls: ['./dia-create.component.css']
})
export class DiaCreateComponent implements OnInit {

  constructor(private diaService: DiaService, private toastrService: ToastrService) { }

  dia: Dia;

  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  createDia(): Dia {
    this.diaService.createDia(this.dia).subscribe((dia) => {
    this.dia = dia;
      this.create.emit();
      this.toastrService.success("El dia se creó", "Dia creado");
    },
      err => {
        this.toastrService.error(err, "Mala mia");
      });
    return this.dia;
  }

  cancelCreation():void{
    this.cancel.emit();
  }

  ngOnInit() {
    this.dia= new Dia();
  }

}
