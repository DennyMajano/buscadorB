import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroLectorComponent } from './libro-lector.component';

describe('LibroLectorComponent', () => {
  let component: LibroLectorComponent;
  let fixture: ComponentFixture<LibroLectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroLectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroLectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
