import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrancescoTammaComponent } from './francesco-tamma.component';

describe('FrancescoTammaComponent', () => {
  let component: FrancescoTammaComponent;
  let fixture: ComponentFixture<FrancescoTammaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrancescoTammaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrancescoTammaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
