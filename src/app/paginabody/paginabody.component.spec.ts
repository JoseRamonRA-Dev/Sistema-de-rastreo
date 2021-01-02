import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginabodyComponent } from './paginabody.component';

describe('PaginabodyComponent', () => {
  let component: PaginabodyComponent;
  let fixture: ComponentFixture<PaginabodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginabodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginabodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
