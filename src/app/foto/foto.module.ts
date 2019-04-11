import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotolistarComponent } from './fotolistar/fotolistar.component';
import { FormsModule } from '@angular/forms';

import { FotoService } from './foto.service';
import { FotoCrearComponent } from './foto-crear/foto-crear.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [FotolistarComponent, FotoCrearComponent],
  exports:[FotolistarComponent],
  providers: [FotoService]
})
export class FotoModule { }


