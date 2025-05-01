import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'not-so-fit-bit';

  authService = inject(AuthService);

  isLoggedIn = this.authService.loggedIn;

  logout() {
    this.authService.logout();
    this.isLoggedIn = this.authService.loggedIn;
  }
}
