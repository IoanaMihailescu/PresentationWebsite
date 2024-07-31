import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnaponComponent } from './snapon.component';

describe('SnaponComponent', () => {
  let component: SnaponComponent;
  let fixture: ComponentFixture<SnaponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnaponComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
