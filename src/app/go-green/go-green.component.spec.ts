import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoGreenComponent } from './go-green.component';

describe('GoGreenComponent', () => {
  let component: GoGreenComponent;
  let fixture: ComponentFixture<GoGreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoGreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
