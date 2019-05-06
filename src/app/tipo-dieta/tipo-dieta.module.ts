import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoDietaListarComponent } from './tipo-dieta-listar/tipo-dieta-listar.component';
import { TipoDietaService } from './tipo-dieta.service';
import { TipoDietaCreateComponent } from './tipo-dieta-create/tipo-dieta-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TipoDietaListarComponent, TipoDietaCreateComponent],
  exports:[TipoDietaListarComponent],
  providers:[TipoDietaService]
})
export class TipoDietaModule { }
