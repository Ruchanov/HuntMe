import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent {
  constructor(private http: HttpClient) {}

  onSubmit() {
    const formData = new FormData();
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const name = nameInput.value;

    const emailInput = document.getElementById('email') as HTMLInputElement;
    const email = emailInput.value;

    const resumeInput = document.getElementById('resume') as HTMLInputElement;
    const resume = resumeInput.files ? resumeInput.files[0] : null;
    formData.append('name',name);
    formData.append('email', email);
    if (resume) {
      formData.append('resume', resume);
    }

    this.http.post('/api/apply', formData).subscribe(response => {
      console.log('Данные отправлены на сервер');
    });
  }
}
