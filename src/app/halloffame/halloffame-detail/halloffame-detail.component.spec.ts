import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalloffameDetailComponent } from './halloffame-detail.component';

describe('HalloffameDetailComponent', () => {
  let component: HalloffameDetailComponent;
  let fixture: ComponentFixture<HalloffameDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalloffameDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalloffameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
