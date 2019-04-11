import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

import { QuejaYReclamoService } from './quejaYReclamo.service';
import { QuejaYReclamoListComponent } from './quejaYReclamoList/quejaYReclamoList.component';
import{QuejaYReclamoCreateComponent} from './queja-yreclamo-create/queja-yreclamo-create.component';


@NgModule({
  imports: [
    CommonModule,AppRoutingModule,FormsModule
  ],
  declarations: [QuejaYReclamoListComponent,QuejaYReclamoCreateComponent],
  providers: [QuejaYReclamoService],
  exports:[QuejaYReclamoListComponent,QuejaYReclamoCreateComponent],
  bootstrap:[]
})
export class QuejaYReclamoModule { }