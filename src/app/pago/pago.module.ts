import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagoListComponent } from './pago-list/pago-list.component';
import { PagoService } from './pago.service';
import { PagoCreateComponent } from './pago-create/pago-create.component';
import { FormsModule } from '@angular/forms';
import { PagoEditComponent } from './pago-edit/pago-edit.component';
import {NgxPermissionsModule} from 'ngx-permissions';

@NgModule({
  imports: [
    CommonModule, FormsModule, NgxPermissionsModule
  ],
  declarations: [PagoListComponent, PagoCreateComponent, PagoEditComponent],
  exports: [PagoListComponent],
  providers: [PagoService]
})
export class PagoModule { }