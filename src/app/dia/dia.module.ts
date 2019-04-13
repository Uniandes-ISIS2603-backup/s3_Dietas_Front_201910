import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaListarComponent } from './dia-listar/dia-listar.component';
import { DiaService } from './dia.service';
import { DiaCreateComponent } from './dia-create/dia-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,FormsModule
   ],
  declarations: [DiaListarComponent, DiaCreateComponent],
  exports:[DiaListarComponent],
  providers:[DiaService]
})
export class DiaModule { }
