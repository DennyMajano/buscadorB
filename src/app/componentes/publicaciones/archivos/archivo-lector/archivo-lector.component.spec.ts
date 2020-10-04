import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivoLectorComponent } from './archivo-lector.component';

describe('ArchivoLectorComponent', () => {
  let component: ArchivoLectorComponent;
  let fixture: ComponentFixture<ArchivoLectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivoLectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivoLectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
