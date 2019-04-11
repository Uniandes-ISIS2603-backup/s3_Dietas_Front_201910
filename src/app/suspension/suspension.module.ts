import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuspensionListComponent } from './suspensionlist/suspensionlist.component';
import { SuspensionService } from './suspension.service';
import { SuspensionCreateComponent } from './suspension-create/suspension-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [SuspensionListComponent, SuspensionCreateComponent],
  exports: [SuspensionListComponent],
  providers: [SuspensionService]
})
export class SuspensionModule { }