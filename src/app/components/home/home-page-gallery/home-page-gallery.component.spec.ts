import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageGalleryComponent } from './home-page-gallery.component';

describe('HomePageGalleryComponent', () => {
  let component: HomePageGalleryComponent;
  let fixture: ComponentFixture<HomePageGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
