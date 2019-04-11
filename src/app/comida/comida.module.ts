import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComidalistarComponent } from './comidalistar/comidalistar.component';
import { FormsModule } from '@angular/forms';
import { ComidaService } from './comida.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ComidaCrearComponent } from './comida-crear/comida-crear.component';
import { ComidaEditarComponent } from './comida-editar/comida-editar.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [ComidalistarComponent, ComidaCrearComponent, ComidaEditarComponent],
  exports:[ComidalistarComponent],
  providers: [ComidaService]
})
export class ComidaModule { }