import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})

export class ParentComponent implements OnInit {

  socialActive = false

  constructor(private themeService: ThemeService, private router: Router) { }

  ngOnInit(): void {
    this.setUpScrollListener()
  }

  setUpScrollListener() {
    window.addEventListener("scroll", () => {
      var ele = document.querySelector('#socials')!
      var position = ele.getBoundingClientRect()
      if (position.top < window.innerHeight && position.bottom >= 0) {
        this.socialActive = true
      } else {
        this.socialActive = false
      }
    })
  }

  isDarkTheme = this.themeService.isDarkTheme

  switchTheme() {
    this.themeService.switchTheme()
  }

  scrollTo(id: any) {
    this.router.navigate(['home']).then(() => {
      document.getElementById(id)?.scrollIntoView()
    })
  }

  isActive(an: any) {
    return an == this.router.url
  }

}