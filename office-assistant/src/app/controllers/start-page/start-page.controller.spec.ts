import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPageController } from './start-page.controller';

describe('StartPageComponent', () => {
  let component: StartPageController;
  let fixture: ComponentFixture<StartPageController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPageController ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPageController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
