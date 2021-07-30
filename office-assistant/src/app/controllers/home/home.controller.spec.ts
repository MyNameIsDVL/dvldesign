import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeController } from './home.controller';

describe('HomeComponent', () => {
  let component: HomeController;
  let fixture: ComponentFixture<HomeController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeController ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
