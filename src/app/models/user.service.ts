import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export interface User {
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

  constructor(private httpClient: HttpClient) {
    this._users = new BehaviorSubject<User[]>([]);
    this.users = this._users.asObservable();
    this.loadUSers();
  }

  loadUSers(): void {
    this.httpClient
      .get<User[]>(this.url)
      .subscribe((users: User[]) => this._users.next(users));
  }

  
}
