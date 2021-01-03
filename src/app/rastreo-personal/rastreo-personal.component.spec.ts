import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RastreoPersonalComponent } from './rastreo-personal.component';

describe('RastreoPersonalComponent', () => {
  let component: RastreoPersonalComponent;
  let fixture: ComponentFixture<RastreoPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RastreoPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RastreoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
