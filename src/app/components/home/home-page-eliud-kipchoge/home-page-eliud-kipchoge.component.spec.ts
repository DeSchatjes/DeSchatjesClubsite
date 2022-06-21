import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageEliudKipchogeComponent } from './home-page-eliud-kipchoge.component';

describe('HomePageEliudKipchogeComponent', () => {
  let component: HomePageEliudKipchogeComponent;
  let fixture: ComponentFixture<HomePageEliudKipchogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageEliudKipchogeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageEliudKipchogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
