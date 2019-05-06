import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HalloffamelistarComponent } from './halloffamelistar/halloffamelistar.component';
import { FormsModule } from '@angular/forms';
import { HalloffameService } from './halloffame.service';
import { HalloffameDetailComponent } from './halloffame-detail/halloffame-detail.component';
import { HalloffameCreateComponent } from './halloffame-create/halloffame-create.component';
import { PersonaModule } from '../persona/persona.module';
import { HalloffameEditarComponent } from './halloffame-editar/halloffame-editar.component';
import {NgxPermissionsModule} from 'ngx-permissions';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PersonaModule, 
    NgxPermissionsModule
  ],
  declarations: [HalloffamelistarComponent, HalloffameDetailComponent, HalloffameCreateComponent, HalloffameEditarComponent],
  exports: [HalloffamelistarComponent],
  providers: [HalloffameService]
})
export class HalloffameModule { }