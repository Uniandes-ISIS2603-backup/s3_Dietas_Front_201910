import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificacionycomentarioListComponent } from './calificacionycomentarioList/calificacionycomentarioList.component';
import { CalificacionycomentarioService } from './calificacionycomentario.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalificacionycomentarioListComponent],
  exports: [CalificacionycomentarioListComponent],
  providers: [CalificacionycomentarioService]
})
export class CalificacionycomentarioModule { }