import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckpointsComponent } from './checkpoints.component';

describe('CheckpointsComponent', () => {
  let component: CheckpointsComponent;
  let fixture: ComponentFixture<CheckpointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckpointsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
