import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common/common.service';
import { FirebaseService } from '../services/firebase/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = false

  constructor(private firebaseService: FirebaseService, private router: Router, private commonService: CommonService) { }

  ngOnInit(): void {

    if (localStorage.getItem('loading')) this.loading = true

    this.firebaseService.getRedirectResult()
      .then((result) => {
        this.commonService.user = result?.user
        if (result?.user) {
          localStorage.setItem('user', JSON.stringify(result?.user))
          this.router.navigate(['fare/dashboard'])
        }
      })
      .catch((error) => {
        console.log(error + ' from redirect result')
      })
      .finally(() => {
        this.setLoading(false)
      })
  }

  signIn() {
    this.setLoading(true)
    this.firebaseService.signIn()
      .catch((error) => {
        console.log(error)
      })
  }

  setLoading(bool: boolean) {
    if (bool) {
      localStorage.setItem('loading', ' ')
      this.loading = true
    }
    else {
      localStorage.removeItem('loading')
      this.loading = false
    }
    console.log("Setting loading ", bool)
  }

  goToEventPage() {
    this.router.navigate(['/'])
  }
}
