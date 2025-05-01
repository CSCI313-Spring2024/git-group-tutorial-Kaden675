import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService, User } from '../../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  user: User = {
    id: '',
    name: '',
    email: '',
    userName: '',
    password: ''
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService){}

  async register(){
    this.successMessage = '';
    this.errorMessage = '';

    const usernameExists = await this.userService.checkUsernameExists(this.user.userName);
    if(usernameExists) {
      this.errorMessage = 'Username already exists.';
      return;
    }

    try {
      await this.userService.addUser(this.user);
      this.successMessage = 'Registration successful.';
      this.resetForm();
    } catch(error){
      console.error(error);
      this.errorMessage = 'An error occured'
    }
  }

  resetForm() {
    this.user = {
      id: '',
      name: '',
      email: '',
      userName: '',
      password: ''
    }
  }
}
