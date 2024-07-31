import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CognizantComponent } from './cognizant.component';

describe('CognizantComponent', () => {
  let component: CognizantComponent;
  let fixture: ComponentFixture<CognizantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CognizantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CognizantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
