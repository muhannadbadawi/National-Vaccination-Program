import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildListComponent } from '../views/child-list/child-list.component';
import { ProfileComponent } from '../views/profile/profile.component';
import { SupportComponent } from '../views/support/support.component';
import { AppMapComponent } from '../views/user-home/app-map.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const  route: Routes = [
  // {
  //   path: 'moduleView',
  //   loadChildren: () => import('../views/view.module').then(m => m.ViewModule)
  // },
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path:'childList',  
        component:ChildListComponent,
      },
      {
        path:'', 
        component:AppMapComponent,
      
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
