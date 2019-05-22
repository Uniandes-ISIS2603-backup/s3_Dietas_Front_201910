import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemanaListarComponent } from './semana-listar/semana-listar.component';
import { SemanaDetailComponent } from './semana-detail/semana-detail.component';
import { SemanaService } from './semana.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SemanaListarComponent, SemanaDetailComponent],
  exports:[SemanaListarComponent],
  providers:[SemanaService]
})
export class SemanaModule { }
