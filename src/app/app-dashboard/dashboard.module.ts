import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from '../views/profile/profile.component';
import { AppMapComponent } from '../views/user-home/app-map.component';
import { ChildListComponent } from '../views/child-list/child-list.component';
import { SupportComponent } from '../views/support/support.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    AppMapComponent,
    ChildListComponent,
    SupportComponent
  ],
  imports: [
    CommonModule,
    DashRoutingModule
  ]
})
export class DashboardModule { }
