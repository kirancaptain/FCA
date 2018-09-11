import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { ApiService } from './api.service';
import { User } from '../model/user.model';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
  returnUrl = '';


  constructor(private apiService: ApiService, private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  setAuth(user: User) {
    localStorage.setItem('token', user.token);
    this.currentUserSubject.next(user);
  }

  removeAuth() {
    localStorage.removeItem('token');
    this.currentUserSubject.next({} as User);
    this.redirect();
  }

  redirect() {
    this.router.navigate(['login'], { queryParams: { returnUrl: this.router.url } });
  }

  verifyAuth(user) {
    return new Promise((resolve, reject) => {
      this.apiService.post('/login', user).subscribe((userData) => {
        if (userData !== undefined) {
          if (userData.json().message === 'User Verified') {
            user.token = userData.json().access_token;
            this.setAuth(user);
            resolve(true);
          } else {
            this.removeAuth();
            resolve(false);
          }
        }
      });
    });
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  isAuthenticated() {
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token') !== undefined) {
      if (localStorage.getItem('token') !== null) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

}





