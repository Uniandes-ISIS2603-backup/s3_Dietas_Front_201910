import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalloffameEditarComponent } from './halloffame-editar.component';

describe('HalloffameEditarComponent', () => {
  let component: HalloffameEditarComponent;
  let fixture: ComponentFixture<HalloffameEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalloffameEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalloffameEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

