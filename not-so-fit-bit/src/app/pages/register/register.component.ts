import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserService } from '../../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) {}

  register() {
    if (this.userService.register(this.username, this.password)) {
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'Username already exists.';
    }
  }
}
