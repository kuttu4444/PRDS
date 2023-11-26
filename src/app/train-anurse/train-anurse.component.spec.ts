import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainANurseComponent } from './train-anurse.component';

describe('TrainANurseComponent', () => {
  let component: TrainANurseComponent;
  let fixture: ComponentFixture<TrainANurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainANurseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainANurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
