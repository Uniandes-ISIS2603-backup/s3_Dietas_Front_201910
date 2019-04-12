import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocinaEditarComponent } from './cocina-editar.component';

describe('CocinaEditarComponent', () => {
  let component: CocinaEditarComponent;
  let fixture: ComponentFixture<CocinaEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocinaEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocinaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
