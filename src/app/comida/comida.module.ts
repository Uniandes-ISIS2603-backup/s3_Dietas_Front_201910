import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComidalistarComponent } from './comidalistar/comidalistar.component';
import { FormsModule } from '@angular/forms';
import { ComidaService } from './comida.service';
import {NgxPermissionsModule} from 'ngx-permissions';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [ComidalistarComponent],
  exports:[ComidalistarComponent],
  providers: [ComidaService]
})
export class ComidaModule { }