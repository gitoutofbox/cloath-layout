import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users: Array<User> = [];
  constructor() { }

  ngOnInit() {
    this.users = [
      { id: 1, displayText: "Shop Women" },
      { id: 2, displayText: "Shop Man" },
      { id: 3, displayText: "Shop Girl" },
      { id: 4, displayText: "Shop Boy" }
    ]
  }

}
