import { Component, OnInit } from '@angular/core';
import { CommonService } from '../fare-app/services/common/common.service';
import { ThemeService } from '../fare-app/services/theme/theme.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void { }

  isDarkTheme = this.themeService.isDarkTheme

  switchTheme() {
    this.themeService.switchTheme()
  }

  alertt(){
    alert("Comming Soon")
  }

}