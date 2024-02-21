import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAceitunaComponent } from './a-aceituna.component';

describe('AAceitunaComponent', () => {
  let component: AAceitunaComponent;
  let fixture: ComponentFixture<AAceitunaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AAceitunaComponent]
    });
    fixture = TestBed.createComponent(AAceitunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
