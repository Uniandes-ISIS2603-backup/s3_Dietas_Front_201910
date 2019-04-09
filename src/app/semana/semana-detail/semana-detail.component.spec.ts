import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanaDetailComponent } from './semana-detail.component';

describe('SemanaDetailComponent', () => {
  let component: SemanaDetailComponent;
  let fixture: ComponentFixture<SemanaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemanaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
