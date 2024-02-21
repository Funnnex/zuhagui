import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAlmendrasComponent } from './a-almendras.component';

describe('AAlmendrasComponent', () => {
  let component: AAlmendrasComponent;
  let fixture: ComponentFixture<AAlmendrasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AAlmendrasComponent]
    });
    fixture = TestBed.createComponent(AAlmendrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
