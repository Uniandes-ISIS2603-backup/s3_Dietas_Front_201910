import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaCrearComponent } from './comida-crear.component';

describe('ComidaCrearComponent', () => {
  let component: ComidaCrearComponent;
  let fixture: ComponentFixture<ComidaCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComidaCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
