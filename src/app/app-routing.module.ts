import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './fair-app/guards/auth.guard';
import { ParentComponent } from './website/parent/parent.component';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule)
  },
  {
    path: 'fare',
    loadChildren: () => import('./fair-app/fair-app.module').then(m => m.FairAppModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }