import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageBackroundComponent } from './home-page-backround.component';

describe('HomePageBackroundComponent', () => {
  let component: HomePageBackroundComponent;
  let fixture: ComponentFixture<HomePageBackroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageBackroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageBackroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
