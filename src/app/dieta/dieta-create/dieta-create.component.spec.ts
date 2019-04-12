import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import { DietaCreateComponent } from './dieta-create.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {DietaService} from '../dieta.service';
import {Dieta} from '../dieta';


describe('DietaCreateComponent', () => {
 let component: DietaCreateComponent;
    let fixture: ComponentFixture<DietaCreateComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                }, 
                DietaService,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                           paramMap: convertToParamMap({id: 100})
                        }
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DietaCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});