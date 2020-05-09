import { Component, OnInit } from '@angular/core';
import { UserService, User } from './models/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    // console.log('init');
    // this.users$ = this.userService.users;
    // console.log(this.users$);

    // this.users$ = this.userService.loadUSers();

    // this.userService.loadUSers().subscribe(data => console.log(data));

    this.users$ = this.userService.users;

  }

}
