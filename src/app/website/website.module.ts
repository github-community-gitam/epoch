import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ParentComponent } from './parent/parent.component';
import { SponsorsPageComponent } from './sponsors-page/sponsors-page.component';
import { MediaPageComponent } from './media-page/media-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ParentComponent,
    SponsorsPageComponent,
    MediaPageComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
