import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneandoneInternetComponent } from './oneandone-internet.component';

describe('OneandoneInternetComponent', () => {
  let component: OneandoneInternetComponent;
  let fixture: ComponentFixture<OneandoneInternetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneandoneInternetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneandoneInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
