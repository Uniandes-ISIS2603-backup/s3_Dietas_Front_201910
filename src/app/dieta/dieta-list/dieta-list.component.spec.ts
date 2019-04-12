import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';
import {DietaListComponent} from './dieta-list.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {DietaService} from '../dieta.service';
import {Dieta} from '../dieta';

describe('DietaListComponent', () => {
    let component: DietaListComponent;
    let fixture: ComponentFixture<DietaListComponent>;
    const dietas: Dieta[] = require('../../../assets/dietas.json');

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, DietaService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DietaListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should have a list of dietas', () => {
        component.dietas = dietas;
        expect(component.dietas.length).toEqual(dietas.length);
    });

    it('a dieta should be a dieta (first and last)', () => {
        component.dietas = dietas;
        //revisar todos los dietas
        expect(component.dietas[0].name).toEqual(dietas[0].name);
        expect(component.dietas[dietas.length - 1].name).toEqual(dietas[dietas.length - 1].name);
    });
});