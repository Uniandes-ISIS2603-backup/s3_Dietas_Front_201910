import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemanaListarComponent } from './semana-listar/semana-listar.component';
import { SemanaDetailComponent } from './semana-detail/semana-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SemanaListarComponent, SemanaDetailComponent],
  exports:[SemanaListarComponent]
})
export class SemanaModule { }
