import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoDetalleComponent } from './texto-detalle.component';

describe('TextoDetalleComponent', () => {
  let component: TextoDetalleComponent;
  let fixture: ComponentFixture<TextoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
