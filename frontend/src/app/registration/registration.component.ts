import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name: string;
  email: string;
  password: string;
  constructor() {
    this.name = '';
    this.email = '';
    this.password = '';
  }
  onSubmit(form: NgForm){
    const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;
    // Реализация логики для обработки введенных данных формы
  }
}
