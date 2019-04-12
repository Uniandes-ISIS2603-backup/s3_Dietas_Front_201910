import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejayreclamoEditComponent } from './quejayreclamo-edit.component';

describe('QuejayreclamoEditComponent', () => {
  let component: QuejayreclamoEditComponent;
  let fixture: ComponentFixture<QuejayreclamoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuejayreclamoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuejayreclamoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
