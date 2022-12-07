import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './app-dashboard/dashboard/dashboard.component';
import { SigninComponent } from './app-account/signin/signin.component';
import { SignupComponent } from './app-account/signup/signup.component';


export const routes: Routes = [
  { path: 'signup',component: SignupComponent },
  { path: 'dashboard', loadChildren: () => import('./app-dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '', component: SigninComponent, pathMatch: 'full'  },
  { path: 'signin', component: SigninComponent,redirectTo:'',  pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

