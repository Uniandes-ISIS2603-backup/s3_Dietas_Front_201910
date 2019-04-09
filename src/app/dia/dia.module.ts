import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaListarComponent } from './dia-listar/dia-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DiaListarComponent],
  exports:[DiaListarComponent]
})
export class DiaModule { }
