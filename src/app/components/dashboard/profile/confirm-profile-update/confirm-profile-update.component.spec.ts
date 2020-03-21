import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmProfileUpdateComponent } from './confirm-profile-update.component';

describe('ConfirmProfileUpdateComponent', () => {
  let component: ConfirmProfileUpdateComponent;
  let fixture: ComponentFixture<ConfirmProfileUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmProfileUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmProfileUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
