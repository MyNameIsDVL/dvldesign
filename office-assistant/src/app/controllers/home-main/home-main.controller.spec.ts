import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainController } from './home-main.controller';

describe('HomeMainComponent', () => {
  let component: HomeMainController;
  let fixture: ComponentFixture<HomeMainController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMainController ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
