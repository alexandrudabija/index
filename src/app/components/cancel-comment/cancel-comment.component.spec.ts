import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelCommentComponent } from './cancel-comment.component';

describe('CancelCommentComponent', () => {
  let component: CancelCommentComponent;
  let fixture: ComponentFixture<CancelCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
