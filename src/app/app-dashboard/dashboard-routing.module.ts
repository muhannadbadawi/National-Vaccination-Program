import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCapacityComponent } from '../views/add-capacity/add-capacity.component';
import { AddCenterComponent } from '../views/add-center/add-center.component';
import { AddDateCapacityComponent } from '../views/add-date-capacity/add-date-capacity.component';
import { AddVaccineComponent } from '../views/add-vaccine/add-vaccine.component';
import { CenterListComponent } from '../views/center-list/center-list.component';
import { ChildListComponent } from '../views/child-list/child-list.component';
import { ParentListComponent } from '../views/parent-list/parent-list.component';
import { ProfileComponent } from '../views/profile/profile.component';
import { ReservationListComponent } from '../views/reservation-list/reservation-list.component';
import { ReservationsMenuComponent } from '../views/reservations-menu/reservations-menu.component';
import { SupportComponent } from '../views/support/support.component';
import { AppMapComponent } from '../views/user-home/app-map.component';
import { VaccineListComponent } from '../views/vaccine-list/vaccine-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DetailsComponent} from '../views/details/details.component';


export const  route: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path:'childList',  
        component:ChildListComponent,
      },
      {
        path:'details',  
        component:DetailsComponent,
      },
      {
        path:'centerList',  
        component:CenterListComponent,
      },
      {
        path:'vaccineList',  
        component:VaccineListComponent,
      },
      {
        path:'parentList',  
        component:ParentListComponent,
      },
      {
        path:'Reservations',  
        component:ReservationListComponent,
      },
      {
        path:'', 
        component:AppMapComponent,
      
      },
      {
        path:'reservationsMenu', 
        component:ReservationsMenuComponent,
      
      },
      {
        path:'addCenter', 
        component:AddCenterComponent,
      
      }, 
      {
        path:'addVaccine', 
        component:AddVaccineComponent,
      },
      {
        path:'addCapacity', 
        component:AddCapacityComponent,
      },
      {
        path:'addDateCapacity', 
        component:AddDateCapacityComponent,
      },
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'support',
        component:SupportComponent,
      }
    ]
  },
  
];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
