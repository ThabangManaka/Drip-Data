import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

// User interface
export class User {
  name: String;
  email: String;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  UserProfile: User;
  
  constructor(public userService : UserService) {
    this.userService.profileUser().subscribe((data:any) => {
      this.UserProfile = data;
    })


  }

  ngOnInit(): void {
  }

}
