import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejaYReclamoEditarComponent } from './queja-yreclamo-editar.component';

describe('QuejaYReclamoEditarComponent', () => {
  let component: QuejaYReclamoEditarComponent;
  let fixture: ComponentFixture<QuejaYReclamoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuejaYReclamoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuejaYReclamoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
