import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyReliefComponent } from './emergency-relief.component';

describe('EmergencyReliefComponent', () => {
  let component: EmergencyReliefComponent;
  let fixture: ComponentFixture<EmergencyReliefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyReliefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyReliefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
