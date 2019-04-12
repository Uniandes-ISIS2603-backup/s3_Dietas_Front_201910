import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

import { PersonaService } from './persona.service';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaDetailComponent } from './persona-detail/persona-detail.component';
import { PersonaCreateComponent } from './persona-create/persona-create.component';
@NgModule({
  imports: [
    CommonModule,AppRoutingModule,FormsModule
  ],
  declarations: [PersonaListComponent, PersonaDetailComponent,PersonaCreateComponent],
  providers: [PersonaService],
  exports:[PersonaListComponent,PersonaCreateComponent],
  bootstrap:[PersonaListComponent,PersonaCreateComponent]
})
export class PersonaModule { }