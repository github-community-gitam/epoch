import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcoinsComponent } from './addcoins/addcoins.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { ScanComponent } from './scan/scan.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'scan', component: ScanComponent },
  { path: 'addcoins', component: AddcoinsComponent },
  { path: 'history', component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FareAppRoutingModule { }
