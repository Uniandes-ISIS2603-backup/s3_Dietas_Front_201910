import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaEditarComponent } from './comida-editar.component';

describe('ComidaEditarComponent', () => {
  let component: ComidaEditarComponent;
  let fixture: ComponentFixture<ComidaEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComidaEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
