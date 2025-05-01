import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
 
  private authService = inject(AuthService);

  email = '';
  password = '';

  login() {
    if (this.email == '') {
      alert('Please enter a valid email');
      return;
    }

    if (this.password == '') {
      alert('Please enter your password');
      return;
    }

    this.authService.login(this.email, this.password);
    this.email = '';
    this.email = '';
  }
}
