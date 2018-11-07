import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) { }

  getUser(): void {
    this.user = this.userService.getUser();
  }

  ngOnInit() {
    console.log(this.user);
    this.getUser();
  }

}
