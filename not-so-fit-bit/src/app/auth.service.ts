import { inject, Injectable, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile, User, updateEmail, updatePassword, authState } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface UserInfo{
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = inject(Auth);
  private router = inject(Router);
  loggedIn = signal<boolean>(false);
  user$: Observable<User | null> = authState(this.auth);

  constructor(){
    this.auth.onAuthStateChanged(user => {
      this.loggedIn.set(!!user);
    })
  }

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/home'])
    }, err => {
      alert(`Something went wrong: ${err.message}`);
      this.router.navigate(['/login'])
    })
  }

  register(aUser: UserInfo) {
    createUserWithEmailAndPassword(this.auth, aUser.email, aUser.password)
      .then(res => {
        const user: User = res.user;
        const displayName = aUser.firstName + ' ' + aUser.lastName;
        updateProfile(user, {displayName});
        alert('Registration was Successful')
        this.router.navigate(['/login'])
      })
      .catch(err => {
        alert(err.message)
        this.router.navigate(['/register'])
      })

    updateProfile
  }
  
logout(){
  signOut(this.auth)
  .then(() => {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  })
  .catch(err => {
    alert(err.message);
  })
}

forgotPassword(email:string){
  sendPasswordResetEmail(this.auth, email)
    .then(() => {
      this.router.navigate(['/verify-email']);
    })
    .catch(err => {
      alert(`Something went wrong: ${err.message}`);
    })
}

updateUserInfo(updated: UserInfo) {
  const user = this.auth.currentUser;
  const displayName = updated.firstName + ' ' + updated.lastName;

  if (!user) {
    alert('No user is currently logged in.');
    return;
  }

  updateProfile(user, {displayName})
    .catch(err => {
      alert(`Failed to update: ${err.message}`);
    });
  
  if (updated.email) {
    updateEmail(user, updated.email)
      .catch(err => {
        alert(`Failed to update email: ${err.message}`);
      })
  }

  if (updated.password) {
    updatePassword(user, updated.password)
      .catch(err => {
        alert(`Failed to update password : ${err.message}`);
      })
  }

  alert('Profile Updated');
  this.router.navigate(['/home'])
}

getUser(): User | null {
  return this.auth.currentUser;
}
}
