import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireController } from './questionnaire.controller';

describe('QuestionnaireComponent', () => {
  let component: QuestionnaireController;
  let fixture: ComponentFixture<QuestionnaireController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireController ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
