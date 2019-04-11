import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejaYReclamoCreateComponent } from './queja-yreclamo-create.component';

describe('QuejaYReclamoCreateComponent', () => {
  let component: QuejaYReclamoCreateComponent;
  let fixture: ComponentFixture<QuejaYReclamoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuejaYReclamoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuejaYReclamoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
