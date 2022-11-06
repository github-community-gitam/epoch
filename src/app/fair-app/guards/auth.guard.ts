import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CommonService } from '../services/common/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private commonService: CommonService, private router: Router) { }

  canActivate(_: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.getUser()

    if (state.url == '/fare/login' && this.isLoggedIn()) {
      this.router.navigate(['/fare/dashboard'])
      return false
    }

    if (state.url == '/fare/login' && !this.isLoggedIn() || this.isLoggedIn()) {
      return true
    }

    this.router.navigate(['/fare/login'])
    return false
  }

  getUser() {
    if (this.commonService.user) return
    const user = localStorage.getItem('user') as string
    if (user == 'undefined') return
    this.commonService.user = JSON.parse(user) as User
  }

  isLoggedIn() {
    if (this.commonService.user) {
      return true
    }
    return false
  }

}
