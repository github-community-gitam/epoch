import { Component, OnInit } from '@angular/core';
import { CommonService } from './fare-app/services/common/common.service';
import { ThemeService } from './fare-app/services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.initializeTheme()
  }
}

