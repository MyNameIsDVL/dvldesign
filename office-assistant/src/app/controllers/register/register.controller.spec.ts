import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterController } from './register.controller';

describe('RegisterComponent', () => {
  let component: RegisterController;
  let fixture: ComponentFixture<RegisterController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterController ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
