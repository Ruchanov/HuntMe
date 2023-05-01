import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User | undefined;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe({
      next: (response) => {
        console.log('User details:', response);
        this.user = response;
      },
      error: (error) => {
        console.error('Error getting user details:', error);
        console.log('Error details:', error.error);
      }
    });
  }
}
