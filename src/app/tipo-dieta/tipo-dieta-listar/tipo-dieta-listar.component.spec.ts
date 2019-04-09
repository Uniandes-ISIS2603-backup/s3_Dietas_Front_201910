import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDietaListarComponent } from './tipo-dieta-listar.component';

describe('TipoDietaListarComponent', () => {
  let component: TipoDietaListarComponent;
  let fixture: ComponentFixture<TipoDietaListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDietaListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDietaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
