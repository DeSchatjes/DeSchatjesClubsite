import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCamielComponent } from './home-page-camiel.component';

describe('HomePageCamielComponent', () => {
  let component: HomePageCamielComponent;
  let fixture: ComponentFixture<HomePageCamielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageCamielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageCamielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
