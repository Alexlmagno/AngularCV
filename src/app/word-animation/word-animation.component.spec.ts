import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordAnimationComponent } from './word-animation.component';

describe('WordAnimationComponent', () => {
  let component: WordAnimationComponent;
  let fixture: ComponentFixture<WordAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
