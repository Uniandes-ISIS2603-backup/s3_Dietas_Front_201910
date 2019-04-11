import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificacionycomentarioListComponent } from './calificacionycomentarioList/calificacionycomentarioList.component';
import { CalificacionycomentarioService } from './calificacionycomentario.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [CalificacionycomentarioListComponent],
  exports: [CalificacionycomentarioListComponent],
  providers: [CalificacionycomentarioService]
})
export class CalificacionycomentarioModule { }