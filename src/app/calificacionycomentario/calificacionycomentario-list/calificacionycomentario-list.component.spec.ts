import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionycomentarioListComponent } from './calificacionycomentario-list.component';

describe('CalificacionycomentarioListComponent', () => {
  let component: CalificacionycomentarioListComponent;
  let fixture: ComponentFixture<CalificacionycomentarioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionycomentarioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionycomentarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
