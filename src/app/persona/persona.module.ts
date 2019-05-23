import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

import { PersonaService } from './persona.service';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaDetailComponent } from './persona-detail/persona-detail.component';
import { PersonaCreateComponent } from './persona-create/persona-create.component';
import { PersonaEditComponent } from './persona-edit/persona-edit.component';
import { PersonaFormularioComponent } from './persona-formulario/persona-formulario.component';
@NgModule({
  imports: [
    CommonModule,AppRoutingModule,FormsModule
  ],
  declarations: [PersonaListComponent, PersonaDetailComponent,PersonaCreateComponent,PersonaEditComponent, PersonaFormularioComponent],
  providers: [PersonaService],
  exports:[PersonaListComponent,PersonaCreateComponent,PersonaEditComponent,PersonaDetailComponent, PersonaFormularioComponent],
  
})
export class PersonaModule { }