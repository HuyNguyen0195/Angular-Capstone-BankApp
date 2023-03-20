import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionApprovedComponent } from './question-approved.component';

describe('QuestionApprovedComponent', () => {
  let component: QuestionApprovedComponent;
  let fixture: ComponentFixture<QuestionApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionApprovedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
