import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocinaListComponent } from './cocinalist/cocinalist.component';
import { CocinaService } from './cocina.service';
import { CocinaCreateComponent } from './cocina-create/cocina-create.component';
import { FormsModule } from '@angular/forms';
import { CocinaEditarComponent } from './cocina-editar/cocina-editar.component';
import {NgxPermissionsModule} from 'ngx-permissions';

@NgModule({
  imports: [CommonModule, FormsModule, NgxPermissionsModule],
  declarations: [CocinaListComponent, CocinaCreateComponent, CocinaEditarComponent],
  exports: [CocinaListComponent],
  providers: [CocinaService]
})
export class CocinaModule { }