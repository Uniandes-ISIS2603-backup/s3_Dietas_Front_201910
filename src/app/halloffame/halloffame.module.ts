import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HalloffamelistarComponent } from './halloffamelistar/halloffamelistar.component';


import { FormsModule } from '@angular/forms';
import { HalloffameService } from './halloffame.service';
import { HalloffameDetailComponent } from './halloffame-detail/halloffame-detail.component';
import { HalloffameCreateComponent } from './halloffame-create/halloffame-create.component';
import { PersonaModule } from '../persona/persona.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PersonaModule
  ],
  declarations: [HalloffamelistarComponent, HalloffameDetailComponent, HalloffameCreateComponent],
  exports: [HalloffamelistarComponent],
  providers: [HalloffameService]
})
export class HalloffameModule { }