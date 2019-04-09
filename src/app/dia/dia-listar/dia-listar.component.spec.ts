import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaListarComponent } from './dia-listar.component';

describe('DiaListarComponent', () => {
  let component: DiaListarComponent;
  let fixture: ComponentFixture<DiaListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
