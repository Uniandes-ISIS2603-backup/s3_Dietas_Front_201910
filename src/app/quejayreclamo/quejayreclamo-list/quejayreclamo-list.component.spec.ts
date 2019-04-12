import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejayreclamoListComponent } from './quejayreclamo-list.component';

describe('QuejayreclamoListComponent', () => {
  let component: QuejayreclamoListComponent;
  let fixture: ComponentFixture<QuejayreclamoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuejayreclamoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuejayreclamoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
