import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTrainingComponent } from './skill-training.component';

describe('SkillTrainingComponent', () => {
  let component: SkillTrainingComponent;
  let fixture: ComponentFixture<SkillTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
