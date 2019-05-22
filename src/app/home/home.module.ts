import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePrincipalComponent } from './home-principal/home-principal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomePrincipalComponent],
  exports: [HomePrincipalComponent]
})
export class HomeModule { }
