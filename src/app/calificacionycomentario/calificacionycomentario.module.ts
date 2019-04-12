import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificacionycomentarioListComponent } from './calificacionycomentario-list/calificacionycomentario-list.component';
import { CalificacionycomentarioService } from './calificacionycomentario.service';
import { FormsModule } from '@angular/forms';
import { CalificacionycomentarioCreateComponent } from './calificacionycomentario-create/calificacionycomentario-create.component';
import { CalificacionycomentarioEditarComponent } from './calificacionycomentario-editar/calificacionycomentario-editar.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [CalificacionycomentarioListComponent, CalificacionycomentarioCreateComponent, CalificacionycomentarioEditarComponent],
  exports: [CalificacionycomentarioListComponent],
  providers: [CalificacionycomentarioService]
})
export class CalificacionycomentarioModule { }
