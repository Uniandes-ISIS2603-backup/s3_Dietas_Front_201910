import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoCrearComponent } from './foto-crear.component';

describe('FotoCrearComponent', () => {
  let component: FotoCrearComponent;
  let fixture: ComponentFixture<FotoCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
