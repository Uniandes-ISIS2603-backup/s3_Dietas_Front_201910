import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoEditarComponent } from './foto-editar.component';

describe('FotoEditarComponent', () => {
  let component: FotoEditarComponent;
  let fixture: ComponentFixture<FotoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
