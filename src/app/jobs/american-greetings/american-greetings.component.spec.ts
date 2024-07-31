import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanGreetingsComponent } from './american-greetings.component';

describe('AmericanGreetingsComponent', () => {
  let component: AmericanGreetingsComponent;
  let fixture: ComponentFixture<AmericanGreetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmericanGreetingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmericanGreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
