import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanaListarComponent } from './semana-listar.component';

describe('SemanaListarComponent', () => {
  let component: SemanaListarComponent;
  let fixture: ComponentFixture<SemanaListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemanaListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
