import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserService } from '../../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    if (this.userService.login(this.username, this.password)) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid username or password.';
    }
  }
}
