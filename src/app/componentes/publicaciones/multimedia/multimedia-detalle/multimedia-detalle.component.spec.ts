import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaDetalleComponent } from './multimedia-detalle.component';

describe('MultimediaDetalleComponent', () => {
  let component: MultimediaDetalleComponent;
  let fixture: ComponentFixture<MultimediaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultimediaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
