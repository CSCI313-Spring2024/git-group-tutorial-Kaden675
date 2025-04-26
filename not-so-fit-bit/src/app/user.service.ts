import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersKey = 'users';

  register(username: string, password: string): boolean {
    const users = this.getUsers();
    if (users.find(u => u.username === username)) {
      return false; // Username already exists
    }
    users.push({ username, password });
    localStorage.setItem(this.usersKey, JSON.stringify(users));
    return true;
  }

  login(username: string, password: string): boolean {
    const users = this.getUsers();
    return users.some(u => u.username === username && u.password === password);
  }

  private getUsers(): { username: string, password: string }[] {
    const usersJson = localStorage.getItem(this.usersKey);
    return usersJson ? JSON.parse(usersJson) : [];
  }
}
