import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejayreclamoCreateComponent } from './quejayreclamo-create.component';

describe('QuejayreclamoCreateComponent', () => {
  let component: QuejayreclamoCreateComponent;
  let fixture: ComponentFixture<QuejayreclamoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuejayreclamoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuejayreclamoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
