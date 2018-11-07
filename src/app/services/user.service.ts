import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  someUser: User;

  constructor() {
    this.someUser = {
      id: 'myId',
      firstName: 'myFirstname',
      lastName: 'myLastname',
      email: 'my@mail.com'
    }
  }

  getUser(): User {
    return this.someUser;
  }
}
