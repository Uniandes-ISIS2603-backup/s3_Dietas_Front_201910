import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaListarComponent } from './dia-listar/dia-listar.component';
import { DiaService } from './dia.service';
import { DiaCreateComponent } from './dia-create/dia-create.component';
import { FormsModule } from '@angular/forms';
import { DiaEditComponent } from './dia-edit/dia-edit.component';
import{NgxPermissionsModule} from 'ngx-permissions';

@NgModule({
  imports: [
    CommonModule,FormsModule,
    NgxPermissionsModule
   ],
  declarations: [DiaListarComponent, DiaCreateComponent, DiaEditComponent],
  exports:[DiaListarComponent],
  providers:[DiaService]
})
export class DiaModule { }
