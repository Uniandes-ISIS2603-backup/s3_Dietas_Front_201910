import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocinaCreateComponent } from './cocina-create.component';

describe('CocinaCreateComponent', () => {
  let component: CocinaCreateComponent;
  let fixture: ComponentFixture<CocinaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocinaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocinaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
