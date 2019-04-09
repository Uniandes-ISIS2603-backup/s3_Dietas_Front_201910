import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoDietaListarComponent } from './tipo-dieta-listar/tipo-dieta-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TipoDietaListarComponent],
  exports:[TipoDietaListarComponent]
})
export class TipoDietaModule { }
