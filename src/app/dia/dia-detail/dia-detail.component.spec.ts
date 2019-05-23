import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaDetailComponent } from './dia-detail.component';

describe('DiaDetailComponent', () => {
  let component: DiaDetailComponent;
  let fixture: ComponentFixture<DiaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
