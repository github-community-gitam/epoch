import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventPageComponent } from './event-page/event-page.component';
import { AuthGuard } from './fare-app/guards/auth.guard';

const routes: Routes = [
  { path: '', component: EventPageComponent },
  {
    path: 'fare',
    loadChildren: () => import('./fare-app/fare-app.module').then(m => m.FareAppModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
