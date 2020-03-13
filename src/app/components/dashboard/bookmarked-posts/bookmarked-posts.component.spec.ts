import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedPostsComponent } from './bookmarked-posts.component';

describe('BookmarkedPostsComponent', () => {
  let component: BookmarkedPostsComponent;
  let fixture: ComponentFixture<BookmarkedPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkedPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
