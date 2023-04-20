import {Component, NgModule} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { UserService } from '../user.service';
import {User} from "../models/user";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
  first_name: string | undefined;
  last_name: string | undefined;
  bio: string | undefined;
  location: string | undefined;

  constructor(private userService: UserService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const userData = {
        username: form.value.username,
        email: form.value.email,
        password: form.value.password,
        first_name: form.value.first_name,
        last_name: form.value.last_name,
        bio: form.value.bio,
        location: form.value.location
      };
      this.userService.register(userData).subscribe({
        next: (user: User) => {
          console.log('User registered:', user);
        },
        error: (error) => {
          console.error('Error registering user:', error);
          console.log('Error details:', error.error);
        }
      });
    }
  }
}
