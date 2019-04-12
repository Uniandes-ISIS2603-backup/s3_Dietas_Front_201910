import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Dieta} from './Dieta';
import {Semana} from '../semana/semana';
import {Suspension} from '../suspension/suspension';
import {Persona} from '../persona/persona';
import {DietaService} from './Dieta.service';
import {AppModule} from '../app.module';


describe('Service: DietaService', () => {
    let injector: TestBed;
    let service: DietaService;
	const dietas: Dieta[] = require('../../assets/dietas.json');
	const semanas: Semana[] = require('../../assets/semanas.json');
	const suspensiones: Suspension[] = require('../../assets/suspensiones.json');
	const persona: Persona = require('../../assets/personas.json');
    
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, DietaService]
        });
        injector = getTestBed();
        service = injector.get(DietaService);
    });
	
	it('#getDietas should return value from observable',
    (done: DoneFn) => {
    service.getDietas().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
        });
    });
    
    it('#createDieta should return value from observable',
    (done: DoneFn) => {
   let dieta:Dieta = {id:100,name:"Prueba",tipo:"987612345",objetivo: "ob1",diasSuspendida:0,persona:{ id: 100, tipo: "aa", name:"a"}};
    service.createDieta(dieta).subscribe(value => {
        expect(value.name).toEqual(dieta.name);
        done();
        });
    });
	
	it('#getDietaDetail should return value from observable',
    (done: DoneFn) => {
    service.getDietaDetail(dietas[0].id).subscribe(value => {
        expect(value.name).toEqual(dietas[0].name);
        done();
        });
    });
	it('#createSuspension should return value from observable',
    (done: DoneFn) => {
    service.createSuspension(dietas[0].id,suspensiones[0]).subscribe(value => {
        expect(value.id).toEqual(suspensiones[0].id);
        done();
        });
    });
    it('#createSemana should return value from observable',
    (done: DoneFn) => {
    service.createSemana(dietas[0].id,semanas[0]).subscribe(value => {
        expect(value.id).toEqual(semanas[0].id);
        done();
        });
    });
	
	it('#updateDieta should return the dieta updated',
    (done: DoneFn) => {
	let dieta:Dieta = {id:100,name:"Prueba",tipo:"987612345",objetivo: "ob1",diasSuspendida:0,persona:{ id: 100, tipo: "aa", name:"a"}};
    service.updateDieta(dieta).subscribe(value => {
        expect(value.name).toEqual(dieta.name);
        done();
        });
    });
    
});