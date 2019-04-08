import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemanaListarComponent } from './semana-listar/semana-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SemanaListarComponent],
  exports:[SemanaListarComponent]
})
export class SemanaModule { }
