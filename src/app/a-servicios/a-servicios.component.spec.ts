import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AServiciosComponent } from './a-servicios.component';

describe('AServiciosComponent', () => {
  let component: AServiciosComponent;
  let fixture: ComponentFixture<AServiciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AServiciosComponent]
    });
    fixture = TestBed.createComponent(AServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
