import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanaCreateComponent } from './semana-create.component';

describe('SemanaCreateComponent', () => {
  let component: SemanaCreateComponent;
  let fixture: ComponentFixture<SemanaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemanaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
