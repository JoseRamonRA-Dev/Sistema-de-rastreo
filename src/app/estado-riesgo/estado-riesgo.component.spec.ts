import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoRiesgoComponent } from './estado-riesgo.component';

describe('EstadoRiesgoComponent', () => {
  let component: EstadoRiesgoComponent;
  let fixture: ComponentFixture<EstadoRiesgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoRiesgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
