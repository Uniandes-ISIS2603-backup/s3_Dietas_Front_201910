import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemanaListarComponent } from './semana-listar/semana-listar.component';
import { SemanaDetailComponent } from './semana-detail/semana-detail.component';
import { SemanaService } from './semana.service';
import { FormsModule } from '@angular/forms';
import { SemanaCreateComponent } from './semana-create/semana-create.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SemanaListarComponent, SemanaDetailComponent, SemanaCreateComponent],
  exports:[SemanaListarComponent],
  providers:[SemanaService]
})
export class SemanaModule { }
