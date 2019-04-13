import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaListarComponent } from './dia-listar/dia-listar.component';
import { DiaService } from './dia.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DiaListarComponent],
  exports:[DiaListarComponent],
  providers:[DiaService]
})
export class DiaModule { }
