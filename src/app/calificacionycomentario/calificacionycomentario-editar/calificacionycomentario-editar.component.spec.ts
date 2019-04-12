import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionycomentarioEditarComponent } from './calificacionycomentario-editar.component';

describe('CalificacionycomentarioEditarComponent', () => {
  let component: CalificacionycomentarioEditarComponent;
  let fixture: ComponentFixture<CalificacionycomentarioEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionycomentarioEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionycomentarioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
