import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FairAppRoutingModule } from './fair-app-routing.module';
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
    FairAppRoutingModule,
    ZXingScannerModule
  ]
})
export class FairAppModule { }
