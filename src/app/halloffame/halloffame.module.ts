import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HalloffamelistarComponent } from './halloffamelistar/halloffamelistar.component';


import { FormsModule } from '@angular/forms';
import { HalloffameService } from './halloffame.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HalloffamelistarComponent],
  exports: [HalloffamelistarComponent],
  providers: [HalloffameService]
})
export class HalloffameModule { }