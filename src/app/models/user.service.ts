import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface User {
  name: string;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private readonly url = 'https://jsonplaceholder.typicode.com/users';
  private _users: BehaviorSubject<User[]>;
  public users: Observable<User[]>;

  constructor() {
    this._users = new BehaviorSubject<User[]>([]);
    this.users = this._users.asObservable();
  }
}
