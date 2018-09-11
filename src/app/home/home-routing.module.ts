import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivateChild } from '@angular/router';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { AuthGuard } from '../services/auth-guard.service';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  canActivateChild: [AuthGuard],
  children: [{
    path: 'admin',
    loadChildren: '../../app/admin/admin.module#AdminModule'
  }, {
    path: 'welcome',
    component: WelcomeComponent
  }, {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
