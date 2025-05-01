import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService , UserInfo} from '../../auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  user: UserInfo = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }

  private authService = inject(AuthService)
  
  register(){
    if(this.user.firstName == '') {
      alert('Please enter your first name')
      return;
    }
    if(this.user.lastName == '') {
      alert('Please enter your last name')
      return;
    }
    if(this.user.email == '') {
      alert('Please enter your email')
      return;
    }
    if(this.user.password == ''){
      alert('Please enter a password')
      return;
    }

    this.authService.register(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

}
