import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmendrasComponent } from './almendras.component';

describe('AlmendrasComponent', () => {
  let component: AlmendrasComponent;
  let fixture: ComponentFixture<AlmendrasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlmendrasComponent]
    });
    fixture = TestBed.createComponent(AlmendrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
