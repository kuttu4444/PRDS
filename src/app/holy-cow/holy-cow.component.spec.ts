import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolyCowComponent } from './holy-cow.component';

describe('HolyCowComponent', () => {
  let component: HolyCowComponent;
  let fixture: ComponentFixture<HolyCowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolyCowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolyCowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
