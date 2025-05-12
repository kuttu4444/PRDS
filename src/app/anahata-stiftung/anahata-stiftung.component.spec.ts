import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnahataStiftungComponent } from './anahata-stiftung.component';

describe('AnahataStiftungComponent', () => {
  let component: AnahataStiftungComponent;
  let fixture: ComponentFixture<AnahataStiftungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnahataStiftungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnahataStiftungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
