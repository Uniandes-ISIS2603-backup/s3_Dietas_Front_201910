import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocinaListComponent } from './cocinalist/cocinalist.component';
import { CocinaService } from './cocina.service';
import { CocinaCreateComponent } from './cocina-create/cocina-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [CocinaListComponent, CocinaCreateComponent],
  exports: [CocinaListComponent],
  providers: [CocinaService]
})
export class CocinaModule { }
