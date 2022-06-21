import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageWelcomeComponent } from './home-page-welcome.component';

describe('HomePageWelcomeComponent', () => {
  let component: HomePageWelcomeComponent;
  let fixture: ComponentFixture<HomePageWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
