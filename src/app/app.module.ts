import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';

import {DiaModule} from './dia/dia.module';
import {SemanaModule}from './semana/semana.module';
import {TipoDietaModule} from './tipo-dieta/tipo-dieta.module';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';

import { HalloffameModule } from './halloffame/halloffame.module';
import { FotoModule } from './foto/foto.module';
import { ComidaModule } from './comida/comida.module';
import { QuejaYReclamoModule } from './quejaYReclamo/quejaYReclamo.module';

import {PersonaModule} from './persona/persona.module';

import { QuejaYReclamoEditarComponent } from './quejaYReclamo/queja-yreclamo-editar/queja-yreclamo-editar.component';

import {SuspensionModule} from './suspension/suspension.module';
import {CocinaModule} from './cocina/cocina.module';




@NgModule({
    declarations: [
        AppComponent,
        QuejaYReclamoEditarComponent,
    
    ],
    imports: [
        BrowserModule,
        DiaModule,
        TipoDietaModule,
        SemanaModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,
        FotoModule,
        HalloffameModule,
        ComidaModule,
        SuspensionModule,
        CocinaModule

    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}


