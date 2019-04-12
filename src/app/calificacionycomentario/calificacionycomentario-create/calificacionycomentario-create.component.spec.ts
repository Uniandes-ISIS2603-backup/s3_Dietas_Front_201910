import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionycomentarioCreateComponent } from './calificacionycomentario-create.component';

describe('CalificacionycomentarioCreateComponent', () => {
  let component: CalificacionycomentarioCreateComponent;
  let fixture: ComponentFixture<CalificacionycomentarioCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionycomentarioCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionycomentarioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
