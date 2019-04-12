import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuejayreclamoListComponent } from './quejayreclamo-list/quejayreclamo-list.component';
import { QuejayreclamoCreateComponent } from './quejayreclamo-create/quejayreclamo-create.component';
import { QuejayreclamoEditComponent } from './quejayreclamo-edit/quejayreclamo-edit.component';
import { QuejaYReclamoService } from './quejayreclamo.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [QuejayreclamoListComponent, QuejayreclamoCreateComponent, QuejayreclamoEditComponent],
  providers: [QuejaYReclamoService]
})
export class QuejayreclamoModule { }
