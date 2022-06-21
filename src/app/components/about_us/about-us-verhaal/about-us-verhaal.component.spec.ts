import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsVerhaalComponent } from './about-us-verhaal.component';

describe('AboutUsVerhaalComponent', () => {
  let component: AboutUsVerhaalComponent;
  let fixture: ComponentFixture<AboutUsVerhaalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsVerhaalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsVerhaalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
