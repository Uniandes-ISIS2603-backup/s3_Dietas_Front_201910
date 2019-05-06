import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoDietaListarComponent } from './tipo-dieta-listar/tipo-dieta-listar.component';
import { TipoDietaService } from './tipo-dieta.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TipoDietaListarComponent],
  exports:[TipoDietaListarComponent],
  providers:[TipoDietaService]
})
export class TipoDietaModule { }
