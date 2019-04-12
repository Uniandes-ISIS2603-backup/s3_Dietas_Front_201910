import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import {DietaListComponent} from './dieta-list/dieta-list.component';
import {DietaCreateComponent} from './dieta-create/dieta-create.component';
import {DietaDetailComponent} from './dieta-detail/dieta-detail.component';
import {DietaEditComponent} from './dieta-edit/dieta-edit.component';

import {DietaService} from './dieta.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        NgxPermissionsModule
    ],
    declarations: [
        DietaListComponent, DietaDetailComponent, DietaCreateComponent, DietaEditComponent
    ],
    providers: [DietaService],
    exports: [DietaListComponent, DietaEditComponent
    ]
})
export class DietaModule {}
