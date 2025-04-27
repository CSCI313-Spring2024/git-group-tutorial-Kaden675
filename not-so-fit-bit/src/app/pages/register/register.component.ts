import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  username = '';
  password = '';
  errorMessage = '';

  register() {
    if (this.username && this.password) {
      // Successful registration logic
    } else {
      this.errorMessage = 'Please fill out all fields';
    }
  }
}
