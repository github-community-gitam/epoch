import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FareAppRoutingModule } from './fare-app-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScanComponent } from './scan/scan.component';
import { AddcoinsComponent } from './addcoins/addcoins.component';
import { HistoryComponent } from './history/history.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    ScanComponent,
    AddcoinsComponent,
    HistoryComponent,
  ],
  imports: [
    CommonModule,
    FareAppRoutingModule,
    ZXingScannerModule
  ]
})
export class FareAppModule { }
