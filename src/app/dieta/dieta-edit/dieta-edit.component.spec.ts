import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietaEditComponent } from './dieta-edit.component';

describe('DietaEditComponent', () => {
  let component: DietaEditComponent;
  let fixture: ComponentFixture<DietaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});