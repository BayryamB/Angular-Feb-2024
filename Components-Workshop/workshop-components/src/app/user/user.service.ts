import { Injectable } from '@angular/core';
import { UserAuth } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_KEY = '[user]';
  user: UserAuth | undefined;

  get isLogedIn(): boolean {
    return !!this.user;
  }
  constructor() { 
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login() {
    this.user = {
      username: 'BB',
      email: 'BB@BB.com',
      tel: '2194623568',
      password: 'gfagfw3135'
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
