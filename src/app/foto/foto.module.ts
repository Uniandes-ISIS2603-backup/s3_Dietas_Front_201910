import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotolistarComponent } from './fotolistar/fotolistar.component';
import { FormsModule } from '@angular/forms';

import { FotoService } from './foto.service';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [FotolistarComponent],
  exports:[FotolistarComponent],
  providers: [FotoService]
})
export class FotoModule { }


