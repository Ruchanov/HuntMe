import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string | undefined;
  password: string | undefined;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const userData = {
      email: form.value.email,
      password: form.value.password
    };

    this.userService.login(userData).subscribe({
      next: (response) => {
        console.log('User logged in:', response);
        // Store the received token in localStorage
        localStorage.setItem('token', response.access);
        this.router.navigate(['/search']).then(r => console.log(r));
      },
      error: (error) => {
        console.error('Error logging in:', error);
        console.log('Error details:', error.error);
      }
    });
  }
}
