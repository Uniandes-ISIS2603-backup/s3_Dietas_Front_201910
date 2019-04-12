import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalloffameCreateComponent } from './halloffame-create.component';

describe('HalloffameCreateComponent', () => {
  let component: HalloffameCreateComponent;
  let fixture: ComponentFixture<HalloffameCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalloffameCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalloffameCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
