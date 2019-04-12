import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuspensionListComponent } from './suspensionlist/suspensionlist.component';
import { SuspensionService } from './suspension.service';
import { SuspensionCreateComponent } from './suspension-create/suspension-create.component';
import { FormsModule } from '@angular/forms';
import { SuspensionEditarComponent } from './suspension-editar/suspension-editar.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [SuspensionListComponent, SuspensionCreateComponent, SuspensionEditarComponent],
  exports: [SuspensionListComponent],
  providers: [SuspensionService]
})
export class SuspensionModule { }