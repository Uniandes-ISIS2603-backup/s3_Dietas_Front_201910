import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspensionEditarComponent } from './suspension-editar.component';

describe('SuspensionEditarComponent', () => {
  let component: SuspensionEditarComponent;
  let fixture: ComponentFixture<SuspensionEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspensionEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspensionEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
