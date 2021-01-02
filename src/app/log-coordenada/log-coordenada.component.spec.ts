import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogCoordenadaComponent } from './log-coordenada.component';

describe('LogCoordenadaComponent', () => {
  let component: LogCoordenadaComponent;
  let fixture: ComponentFixture<LogCoordenadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogCoordenadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogCoordenadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
