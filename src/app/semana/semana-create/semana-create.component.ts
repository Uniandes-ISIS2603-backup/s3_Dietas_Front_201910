import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {SemanaService}from'../semana.service';
import { ToastrService } from 'ngx-toastr';
import { Semana } from '../semana';
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'semana-create',
  templateUrl: './semana-create.component.html',
  styleUrls: ['./semana-create.component.css']
})
export class SemanaCreateComponent implements OnInit {

  constructor(private semanaService: SemanaService, private toastrService: ToastrService) { }
  semana:Semana;
  @Output() cancel =  new EventEmitter()
  @Output() create =  new EventEmitter()


  createSemana():Semana{
    this.semanaService.createSemana(this.semana)
    .subscribe((semana)=> {
      this.semana=semana;
      this.create.emit();
      this.toastrService.success("Se creó la semana");
    },
    err=>{
      this.toastrService.error(err,"Error");
    });
    return this.semana;
  }

  cancelCreation():void{
    this.cancel.emit();
  }

  ngOnInit() {
    this.semana= new Semana();
  }

}
