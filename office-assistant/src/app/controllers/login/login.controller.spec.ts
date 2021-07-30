import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginController } from './login.controller';

describe('LoginComponent', () => {
  let component: LoginController;
  let fixture: ComponentFixture<LoginController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginController ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
