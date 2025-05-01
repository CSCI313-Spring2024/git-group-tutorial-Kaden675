import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService, User } from '../../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private userService: UserService) {}

  async login() {
    this.errorMessage = '';

    try {
      const users = await this.userService.getUser().toPromise();

      if (!users) {
        this.errorMessage = 'Error retrieving users.';
        return;
      }

      const found = users.find(user =>
        user.userName === this.username && user.password === this.password
      );

      if (found) {
        console.log('Login successful');
      } else {
        this.errorMessage = 'Invalid credentials';
      }
    } catch (error) {
      console.error(error);
      this.errorMessage = 'Login failed.';
    }
  }
}
