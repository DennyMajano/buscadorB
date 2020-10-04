import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivoDetalleComponent } from './archivo-detalle.component';

describe('ArchivoDetalleComponent', () => {
  let component: ArchivoDetalleComponent;
  let fixture: ComponentFixture<ArchivoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
