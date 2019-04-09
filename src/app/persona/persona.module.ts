import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing/app-routing.module';


import { PersonaService } from './persona.service';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaDetailComponent } from './persona-detail/persona-detail.component';

@NgModule({
  imports: [
    CommonModule,AppRoutingModule
  ],
  declarations: [PersonaListComponent, PersonaDetailComponent],
  providers: [PersonaService],
  exports:[PersonaListComponent]
})
export class PersonaModule { }