<<<<<<< HEAD
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsersService } from './users.service';

describe('Service: Users', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
    });
  });

  it('should ...', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
=======
import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
>>>>>>> ad14f54e813e5b41570b802a7f47776715f44f44
