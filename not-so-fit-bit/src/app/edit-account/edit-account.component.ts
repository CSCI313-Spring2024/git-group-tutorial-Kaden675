import { Component, inject } from '@angular/core';
import { AuthService, UserInfo } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-account',
  imports: [FormsModule],
  templateUrl: './edit-account.component.html',
  styleUrl: './edit-account.component.css'
})
export class EditAccountComponent {

  private authService = inject(AuthService);

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void{
    const user = this.authService.getUser();

    if(user) {
      const [firstName, lastName] = user.displayName?.split(' ') || [];

      this.firstName = firstName || '';
      this.lastName = lastName || '';
      this.email = user.email || '';
    }
  }

  submit(){
    if (!this.firstName || this.firstName.trim() === ''){
      alert('Please enter your first name');
      return;
    }

    if (!this.lastName || this.lastName.trim() === '') {
      alert('Please enter your last name');
      return;
    }

    if(!this.email || this.email.trim() === '') {
      alert('Please enter your email');
      return;
    }

    const updatedUserInfo: UserInfo = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };

    this.authService.updateUserInfo(updatedUserInfo);
  }
}
