import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuspensionListComponent } from './suspensionlist/suspensionlist.component';
import { SuspensionService } from './suspension.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SuspensionListComponent],
  exports: [SuspensionListComponent],
  providers: [SuspensionService]
})
export class SuspensionModule { }