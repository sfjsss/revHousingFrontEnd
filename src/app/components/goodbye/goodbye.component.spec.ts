/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GoodbyeComponent } from './goodbye.component';

describe('GoodbyeComponent', () => {
  let component: GoodbyeComponent;
  let fixture: ComponentFixture<GoodbyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodbyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodbyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
